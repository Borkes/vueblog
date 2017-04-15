<template>
  <div class="home">

    <div class="blog-list">
        <div>
          <el-input  type="textarea" :autosize="{ minRows: 2, maxRows: 4}"
            placeholder="请输入内容" v-model="content">
          </el-input>
          <el-button type="info" @click="post()" v-show="!isLogin">发表</el-button>
        </div>
        <p v-if="!list.length" style="text-align: center">
        <strong>没有任何博客</strong>
        </p>
        <div>
          <div v-if="isOwner">
            <a  v-for="(blog, index) in list">
            <div class='list-group-item row' v-if="blog.account === getAccountId">
              <div class="col-sm-2 user-details">
                <img :src="blog.image" class="avatar img-circle img-responsive"/>                   
                <p class="text-center">
                    <strong>{{ blog.account }}</strong>
                </p>
              </div>
              <div class="col-sm-9 text-center">
                <h3 class="list-group-item-text">
                  <i>{{ blog.content }}</i>
                </h3>
              </div>
              <div class="col-sm-1" v-if="blog.account === getAccountId">
                <button class = "delete-button" @click="deletePlan(index)">X</button>
              </div>
            </div>
            </a>
          </div>
          <div v-else>
            <a  v-for="(blog, index) in list">
            <div class='list-group-item row'>
              <div class="col-sm-2 user-details">
                <img :src="blog.image" class="avatar img-circle img-responsive"/>                   
                <p class="text-center">
                    <strong>{{ blog.account }}</strong>
                </p>
              </div>
              <div class="col-sm-9 text-center">
                <h3 class="list-group-item-text">
                  <i>{{ blog.content }}</i>
                </h3>
              </div>
              <div class="col-sm-1" v-if="blog.account === getAccountId">
                <button class = "delete-button" @click="deletePlan(index)">X</button>
              </div>
            </div>
            </a>
          </div>
            
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        content: '',
        img: true
      }
    },
    computed: {
      currentAccount () { // 返回当前登录信息
        return this.$store.state.currentAccount;
      },
      list () { // 返回当前博客数据
        // let blogList = Object.assign([], this.$store.state.list);
        return this.$store.state.list;
      },
      isLogin () {  // 判断是否登录中
        return this.$store.state.currentAccount === ''
      },
      getAccountId () {
        return this.$store.state.currentAccount.account;
      },
      isOwner () {
        return this.$route.query.owner === '1' && !(this.$store.state.currentAccount === '');
      }
    },
    methods: {
      deletePlan (index) {
        this.$store.dispatch('deleteBlog', index)
      },
      post () {
        if (this.content === '') {
          this.$message.warning('内容为空');
          return;
        }
        let blog = {
          account: this.currentAccount.account,
          image: this.currentAccount.image,
          content: this.content
        }
        this.$store.dispatch('addBlog', Object.assign({}, blog));
        this.content = '';
      }
    }
  }
</script>
