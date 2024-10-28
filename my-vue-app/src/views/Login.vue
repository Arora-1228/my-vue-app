<script setup>
import {reactive,getCurrentInstance} from 'vue'
import {useAllDataStore} from '@/stores'
import {useRouter} from 'vue-router'
const loginForm = reactive({
  username:'',
  password:'',
})
const {proxy} = getCurrentInstance()
const store = useAllDataStore()
const router = useRouter()
const handleLogin = async ()=>{
  const res = await proxy.$api.getMenu(loginForm)
  // console.log(res)
  store.updateMenuList(res.menuList)
  store.state.token = res.token
  store.addMenu(router)
  router.push('/home')
  
}
</script>

<template>
<div class="body-login">
  <el-form :modle="loginForm" class="login-container">
    <h1>欢迎登录</h1>
    <el-form-item>
      <el-input type="input" placeholder="请输入账号" v-model="loginForm.username">
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" placeholder="请输入密码" v-model="loginForm.password">
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="handleLogin">登录</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<style lang="less" scoped>
.body-login{
  width: 100%;
  height: 100vh;
  background-image: url('../assets/images/background.png');
  background-size:100% 100%;
  background-attachment: fixed;
  overflow: hidden;
}
.login-container{
  width: 400px;
  background-color: #fff;
  border: 1px solid #eaeaea;
  border-radius: 15px;
  padding:35px 35px 15px 35px;
  box-shadow: 0 0 25px #cacaca;
  margin: 250px auto;
  h1{
    text-align: center;
    margin-bottom: 20px;
    color: #505450;
  }
  :deep(.el-form-item__content){
    justify-content: center;
  }

}

</style>