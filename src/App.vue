<template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">博客</a>
        <ul class="nav navbar-nav">
          <li><router-link to="/home">博客首页</router-link></li>
          <li><router-link to="/home?owner=1">个人主页</router-link></li>
        </ul>
      </div>
    </nav>
    <div class="body">
      <el-row>
        <el-col :span='5'>
          <div class='person'>
            <person></person>
          </div>
        </el-col>
        <el-col :span='13'>
          <div class="router">
            <router-view></router-view>            
          </div>
        </el-col>
        <el-col :span='5'>
          <div class="login-info">
            <ul v-show="currentAccount" >
              <el-button @click='login'>登录后发表</el-button>
            </ul>
            <ul v-show="!currentAccount">
              <el-button @click="loginOut">登出</el-button>
            </ul>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import person from './components/Person.vue'

  export default {
    computed: {
      currentAccount () {
        return this.$store.state.currentAccount === '';
      }
    },
    components: { 'person': person },
    methods: {
      loginOut () {
        this.$store.dispatch('loginOut');
        this.$router.push('home');
      },
      login () {
        this.$router.push('login');
      }
    }
  }
</script>

<style>
  .person  {
    margin: 6%;
    padding: 6%;
  }
  .router {
    margin: 5%;
    padding: 5%;
  }
  .login-info {
    margin: 7%;
    padding: 7%;
  }
</style>
