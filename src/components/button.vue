<template>
  <button class="miao-button" :class="[`miao-button-${type}`,{
    'is-plain':plain,
    'is-round':round,
    'is-circle':circle,
    'is-disabled':disabled

  }]"
  :disabled="disabled"
  @click="handleClick"
  >
    <!-- is-plain是个bool值用对象来控制 -->
    <i v-if="icon" :class="icon"></i>
    <span v-if= "$slots.default">
      <!-- 如果既传图标又传文字，让他们有间隙 -->
      <!-- 如果只传图标没有其他内容，span不需要显示 -->
      <!-- 组件可以通过this.$slots拿到所有插槽 -->

        <slot></slot>
    </span>
    </button>
</template>

<script>
export default {
name:'miaoButton',
//封装通用组件，对props约束，props进行校验
// props:['type'],
// 父组件给什么就接什么
props:{
 type:{
  //数据类型
  type:String,
  default:'default'
 },
 plain:{
  type:Boolean,
  default:false
 },
 round:{
   type: Boolean,
   default: false
 },
 circle:{
   type: Boolean,
   default: false
 },
 icon:{
  type:String,
  default:''
  // 默认为空，图标可以不传

 },
 disabled:{
  type:Boolean,
  default:false
 }

},
methods:{
  //点击事件是外部注册的
  handleClick(e){
    this.$emit('click',e)
    //通知父组件点击了，点了按钮，触发外界的click？传参为事件对象
    //向父组件派发了click事件
  }
},

create(){
  console.log(this.type)
}

}
</script>

<style lang="scss" scoped>
.miao-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  //禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;

  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

.miao-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover,
  &:focus {
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
}

.miao-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;

  &:hover,
  &:focus {
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
}

.miao-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;

  &:hover,
  &:focus {
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }
}

.miao-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;

  &:hover,
  &:focus {
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }
}

.miao-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;

  &:hover,
  &:focus {
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }
}

// 朴素按钮样式
.miao-button.is-plain {

  &:hover,
  &:focus {
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}

.miao-button-primary.is-plain {
  color: #409eff;
  background: #ecf5ff;

  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}

.miao-button-success.is-plain {
  color: #67c23a;
  background: #c2e7b0;

  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}

.miao-button-info.is-plain {
  color: #909399;
  background: #d3d4d6;

  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}

.miao-button-warning.is-plain {
  color: #e6a23c;
  background: #f5dab1;

  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}

.miao-button-danger.is-plain {
  color: #f56c6c;
  background: #fbc4c4;

  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}

// round属性
.miao-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}

// circle属性
.miao-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}

// icon配套样式
.miao-button [class*=miao-icon-]+span {
  margin-left: 5px;
}

// disabled属性
.miao-button.is-disabled {
  cursor: no-drop;
  opacity: .5;
    cursor: not-allowed;
}
</style>