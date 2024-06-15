<template>
  <div id="app">
    <!-- <miao-input placeholder="请输入用户名" type="password" name="username" disabled>
    </miao-input> -->
    <!-- <miao-input placeholder="请输入用户名" v-model="username" clearable></miao-input> -->
    <!-- 相当于给username一个:value 一个注册事件 -->
    <!-- <miao-input placeholder="请输入用户名" type="password" v-model="username" show-password></miao-input>
    <miao-input placeholder="请输入用户名" type="password" v-model="username"></miao-input> -->

    <!-- <miao-switch v-model="active"></miao-switch> -->
    <miao-switch v-model="active" active-color="red" inactive-color="green" name="username"></miao-switch>
  </div>

</template>
<script>


export default {
  name: 'App',
  data(){
    return {
      username:'ss',
      active:false

    }
  }
}
  
</script>

<style lang="scss" scoped>
#app .miao-input {
 width: 180px;
}

</style>
