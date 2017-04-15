<template>
  <div class='login'>
    <h1 style='text-align: center'>登录</h1>
    <el-row>
      <el-col :span=4>
        <el-tag size='large' type="success">帐号</el-tag>
      </el-col>
      <el-col :span=20>
        <el-input v-model="account" placeholder="请输入帐号" size='small'></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span=4>
        <el-tag size='large' type="success">密码</el-tag>
      </el-col>
      <el-col :span=20>
        <el-input v-model="password" placeholder="请输入密码" type="password" @keyup.enter.native="login" size='small'></el-input>
      </el-col>
    </el-row>
    <br />
    <div style="text-align: center">
      <el-button @click="login" >登录</el-button>
      <el-button @click="register">注册</el-button>
    </div>
  </div>
</template>

<script>
 export default {
   data () {
     return {
       account: '',
       password: '',
       info: this.$store.state.info
     }
   },
   methods: {
     login () {
       let flag = false;
       var account = {};
       for (var i = 0; i < this.info.length; i++) {
         if (this.info[i].account === this.account) {
           flag = this.info[i].password === this.password;
           account.account = this.account;
           account.image = this.info[i].image;
           break;
         }
       }
       if (flag) {
         this.$store.dispatch('login', account);
         this.$router.push('home');
         this.$message.success('登录成功')
       } else {
         this.$message.error('帐号或密码错误');
       }
     },
     register () {
       this.$router.push('register');
     }
   }
 }
</script>

<style>
  .login {
    margin: 5% 25%;
    padding-top: 0;
  }  
  .el-row {
    margin-bottom: 20px;
  }
</style>
