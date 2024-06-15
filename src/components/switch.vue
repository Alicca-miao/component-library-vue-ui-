<template>
    <div class="miao-switch" :class="{'is-checked': value}" @click="handleClick">
        <span class="miao-switch_core" ref="core">
            <span class="miao-switch_button"></span>
        </span>
        <!-- 外面的大框架如果用label会触发两次，抵消了 -->
        <input class="miao-switch_input" type="checkbox" :name="name" ref="input">
    </div>
</template>

<script>
export default {
    name:'miaoSwitch',
    props:{
        value:{
            type:Boolean,
            default:false
        },
        activeColor:{
            type: String,
            default:''
        },
        inactiveColor:{
            type: String,
            default: ''
        },
        name:{
            type: String,
            default: ''
        }
    },
    methods:{
        async handleClick(){
            this.$emit('input',!this.value)
            //点击时候还要修改背景色
            //等待value发生变化再setcolor
            //把数据改了发生更新
            //nexttick基于promise封装
            //数据修改后等待dom更新再修改按钮颜色
         await this.$nextTick()
         this.setColor()
            this.$refs.input.checked = this.value

        },
        setColor() {
            //修改开关颜色,必须传入其一的颜色
            if (this.activeColor || this.inactiveColor) {
                let color = this.value ? this.activeColor : this.inactiveColor
                this.$refs.core.style.borderColor = color
                this.$refs.core.style.backgroundColor = color

            }
        }

    },
    mounted(){
        this.setColor()
        //控制checkbox的值
        this.$refs.input.checked=this.value
        //input值和value同步


    }

   


}
</script>

<style lang="scss" scoped>
.miao-switch {
    display: inline-block;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;

    .miao-switch_core {
        margin: 0;
        display: inline-block;       position: relative;
        width: 40px;
        height: 20px;
        border: 1px solid #dcdfe6;
        outline: none;
        border-radius: 10px;
        box-sizing: border-box;
        background: #dcdfe6;
        cursor: pointer;
        transition: border-color .3s, background-color .3s;
        vertical-align: middle;

        .miao-switch_button {
            position: absolute;
            top: 1px;
            left: 1px;
            border-radius: 100%;
            transition: all .3s;
            width: 16px;
            height: 16px;
            background-color: #fff;
        }
    }
}

// 选中样式
.is-checked {
    .miao-switch_core {
        border-color: #409eff;
        background-color: #409eff;

        .miao-switch_button {
            transform: translateX(20px);
        }
    }
}

// 隐藏input标签
.miao-switch_input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
}
</style>
