<template>
    <div class="miao-input" :class="{'miao-input_suffix': showSuffix}">
        <!-- 如果传来show-password判断是否需要切换密码显示，如果不传不判断 -->

        <input class="miao-input_inner" :class="{'is-disabled': disabled}" :placeholder="placeholder"
            :type="showPassword ? (passwordVisible ? 'text':'password'):type" :name="name" :disabled="disabled"
            :value="value" @input="handleinput">
        <span class="miao-input_suffix" v-if="showSuffix">
            <i class="miao-input_icon miao-icon-cancel" v-if="clearable && value" @click="clear"></i>
            <i class="miao-input_icon miao-icon-visible" v-if="showPassword" :class="{'miao-icon-visible-active':passwordVisible}"
                @click="handlePassword"></i>

        </span>


    </div>
</template>

<script>
export default {
    name:'miaoInput',

    data(){
        return {
            //用于控制是否显示密码框
            passwordVisible:false
        }
    },
    props: {
        placeholder:{
            type:String,
            default:''
        },
        type:{
            type: String,
            default: 'text'
        },
        name:{
            type: String,
            default: ''
        },
        disabled:{
            type:Boolean,
            default:false
        },
        value: {
        type: String,
        default: ''
        },
        clearable:{
            type: Boolean,
            default: false
        },

        showPassword:{
            type: Boolean,
            default: false
        }
    },
    computed:{
  showSuffix(){
            return this.clearable || this.showPassword
  }
    },
    methods:{
        handleinput(e){
// this.value=e.target.value是不行的因为直接改了父组件传的参数
this.$emit('input',e.target.value)
// 触发这个事件

        },
        clear(){
            this.$emit('input','')
            // 父组件就会清空
        },
        handlePassword(){
this.passwordVisible=!this.passwordVisible
//这样改的是组件自己的数据
        }
    }


}
</script>

<style lang="scss" scoped>
 .miao-input {
     width: 100%;
     position: relative;
     font-size: 14px;
     display: inline-block;

     .miao-input_inner {
         -webkit-appearance: none;
         background-color: #fff;
         background-image: none;
         border: 1px solid #dcdfe6;
         border-radius: 4px;
         box-sizing: border-box;
         color: #606266;
         display: inline-block;
         font-size: inherit;
         height: 40px;
         line-height: 40px;
         outline: none;
         padding: 0 15px;
         transition: border-color .2s cubic-bezier(.645, 045, .355, 1);
         width: 100%;

         &:focus {
             outline: none;
             border-color: #409eff;
         }

         // input禁用样式
         &.is-disabled {
             background-color: #f5f7fa;
             border-color: #e4e7ed;
             color: #c0c4cc;
             cursor: not-allowed;
         }
     }
 }

 // 后面加suffix的意思是后面如果有后缀的话，触发该样式
 .miao-input_suffix {
     .miao-input_inner {
         padding-right: 30px;
     }

     .miao-input_suffix {
         position: absolute;
         right: 10px;
         height: 100%;
         top: 0;
         line-height: 40px;
         text-align: center;
         color: #c0c4cc;
         transition: all .3s;
         z-index: 900;

         i {
             color: #c0c4cc;
             font-size: 14px;
             cursor: pointer;
             transition: color .2s cubic-bezier(.645, .045, .355, 1);
         }
     }
     .miao-icon-visible-active{
        color:blue
     }
 }
</style>