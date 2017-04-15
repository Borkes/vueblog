<template>
    <div>
      <div v-if="!isLogin">
        <img :src="image" class="avatar img-circle img-responsive" alt="图片加载失败"/>
      </div>
      <div v-else>
        <h1>用户未登录</h1>
      </div>
        <el-button  @click="deleteAll">清空缓存[调试用]</el-button>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        img: true,
        imgUrl: '../assets/logo.png'
      }
    },
    computed: {
      isLogin () {
        return this.$store.state.currentAccount === ''
      },
      image () {
        return this.img ? this.$store.state.currentAccount.image : this.imgUrl;
      }
    },
    methods: {
      deleteAll () {
        this.$store.dispatch('removeAll');
        this.$message.success('清除成功')
      }
    }
  }
</script>
