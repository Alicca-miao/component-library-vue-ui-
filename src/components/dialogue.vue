<template>
    <transition name="dialog-fade">
        <!-- 对话框的遮罩 -->
        <div class="miao-dialog_wrapper" v-show="visible" @click.self="handleClose">
            <!-- 但是因为冒泡事件，点哪里都会触发，添加@click.self 只有点击自己才触发-->
            <!-- 真的对话框 -->
            <div class="miao-dialog" :style="{width:width,marginTop:top}">

                <div class="miao-dialog_header">
                    <slot name="title">
                        <span class="miao-dialog_title">{{ title }}</span>
                    </slot>
                    <!-- 把这个class包在插槽里意思是有插槽显示插槽，没插槽显示里面的title文字 -->

                    <button class="miao-dialog_headerbtn" @click="handleClose">
                        <i class="miao-icon-close"></i>
                    </button>
                </div>
                <div class="miao-dialog_body">
                    <!-- 默认插槽  -->
                    <slot></slot>


                </div>
                <div class="miao-dialog_footer" v-if="$slots.footer">
                    <!-- <miao-button>取消</miao-button>
                <miao-button type="primary">确定
                </miao-button> -->
                    <slot name="footer"></slot>
                    <!-- 如果底部没有，那么请底部不要显示 -->
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
name:'miaoDialog',
props:{
    title:{
        type:String,
        default:'提示'

    },
    width:{
        type: String,
        default: '50%'
    },
    top:{
        type: String,
        default: '15vh'
        // 类似于15%
    },
    visible:{
        type: Boolean,
        default: false
    }
},
methods:{
    handleClose(){
        // this.visible=false,不行避免直接修改props
        //得让父组件改，应该触发事件
        this.$emit('close',false)
    }
}
}
</script>

<style lang="scss">
.miao-dialog_wrapper {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    overflow: auto;
    margin: 0;
    z-index: 2001;
    background-color: rgba(0, 0, 0, 0.5);

    .miao-dialog {
        position: relative;
        margin: 15vh auto 50px;
        background: #fff;
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
        width: 30%;

        &_header {
            padding: 20px 20px 10px;

            .miao-dialog_title {
                line-height: 24px;
                font-size: 18px;
                color: #303133;
            }

            .miao-dialog_headerbtn {
                position: absolute;
                top: 20px;
                right: 20px;
                padding: 0;
                background: transparent;
                border: none;
                outline: none;
                cursor: pointer;
                font-size: 16px;

                .miao-icon-close {
                    color: 909399
                }
            }
        }

        &_body {
            padding: 30px 20px;
            color: #606266;
            font-size: 14px;
            word-break: break-all;
        }

        &_footer {
            padding: 10px 20px 20px;
            text-align: right;
            box-sizing: border-box;

           .miao-button:first-child{
                margin-right: 20px;
            }
        }
    }
}

.dialog-fade-enter-active {
    animation: fade .3s;
}

.dialog-fade-leave-active {
    animation: fade .3s reverse;
}

@keyframes fade {
    0% {
        opacity: 0;
        transform: translateY(-20px);
        // 负值向上移动

    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
}
.miao-button{
    margin-left:8px
}

</style>