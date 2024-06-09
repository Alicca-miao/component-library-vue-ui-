<template>
  <div id="app">
    <!-- button 测试代码 -->
    <!-- <div class="row">
      
      <miao-button @click="fn">sousuo</miao-button>
      <miao-button @click="fnn" type="primary">sasa</miao-button>
      <miao-button type="warning">ss</miao-button>
      <miao-button type="success">ss</miao-button>
      <miao-button type="info">ss</miao-button>
      <miao-button type="danger">ss</miao-button>

    </div>

    <div class="row">
      <miao-button plain>sousuo</miao-button>
      <miao-button plain type="primary">sasa</miao-button>
      <miao-button plain type="warning">ss</miao-button>
      <miao-button plain type="success">ss</miao-button>
      <miao-button plain type="info">ss</miao-button>
      <miao-button plain type="danger">ss</miao-button>
    
    </div>

    <div class="row">
      <miao-button disabled plain>sousuo</miao-button>
      <miao-button disabled plain type="primary">sasa</miao-button>
      <miao-button disabled plain type="warning">ss</miao-button>
      <miao-button disabled plain type="success">ss</miao-button>
      <miao-button disabled plain type="info">ss</miao-button>
      <miao-button disabled plain type="danger">ss</miao-button>
     
    </div>

    <div class="row">
      <miao-button plain icon="miao-icon-camera" round>sousuo</miao-button>
      <miao-button plain round type="primary">sasa</miao-button>
      <miao-button plain round type="warning">ss</miao-button>
      <miao-button plain round type="success">ss</miao-button>
      <miao-button plain round type="info">ss</miao-button>
      <miao-button plain round type="danger">ss</miao-button>
      
    </div>

    <div class="row">
      <miao-button plain icon="miao-icon-camera" circle></miao-button>
      <miao-button plain icon="miao-icon-camera" circle type="primary"></miao-button>
      <miao-button plain icon="miao-icon-camera" circle type="warning"></miao-button>
      <miao-button plain icon="miao-icon-camera" circle type="success"></miao-button>
      <miao-button plain icon="miao-icon-camera" circle type="info"></miao-button>
      <miao-button plain icon="miao-icon-camera" circle type="danger"></miao-button>
     
    </div> -->

    <miao-dialog width="40%" top="10px">
      <template v-slot:title>
        <h3>我是变化</h3>
      </template>
    </miao-dialog>
    <!-- 标题通过title动态控制 -->
    <miao-button type="primary" @click="visible=true">按钮</miao-button>
    <miao-dialog width="40%" top="10px" :visible="visible" @close="close">
      <ul>
        <li>1</li>
        <li>2</li>
      </ul>
      <template v-slot:footer>
        <miao-button type="primary" @click="visible=false">确定</miao-button>
        <miao-button @click="visible=false">取消</miao-button>
      </template>
    </miao-dialog>


    <!-- 使用transition包裹一个元素，这个元素在显示隐藏会添加一些类名 -->
    <transition  name="aa">
      <div v-show="visible">我是文本</div>
    </transition>
    <!-- <demo :visible="visible" :money="money" @change="change"></demo> -->


  </div>

</template>

<script>


export default {
  name: 'App',
  
  data(){
return {
visible:false,
money:100
}
  },
  methods:{
    fn(){
      console.log('123')
    },
close(value){
this.visible=value
},

    fnn(){
      console.log('123111')
    },
//     change(value){
// this.money=value
//     }
  }
}
</script>

<style lang="scss" scoped>
// .aa-enter{
//   opacity: 0;
// }
// // aa对应name属性，enter显示前，to显示后，active显示中
// .aa-enter-to{
//   opacity: 1;
// }
// .aa-enter-active{
//   transition: all .5s;
// }


// // 离开同样三个类名
// .aa-leave{
//   opacity: 1;
// }
// .aa-leave-to{
//   opacity: 0;
// }

// .aa-leave-active{
//   transition: all .5s
// }

.row {
  margin-bottom: 20px;
  .miao-button {
   margin-right:20px;
  }
}


.aa-enter-active {
  animation: run .5s;
}

.aa-leave-active {
  animation: run .5s reverse;
  // 离开从1到0
}

@keyframes run {
 0%{
  opacity: 0;
 }
 100%{
  opacity: 1;
 }
}




</style>
