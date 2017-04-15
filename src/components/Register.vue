<template>
  <div class='register'>
     <h1 style='text-align: center'>注册帐号</h1>
     <el-row>
      <el-col :span=4>
        <el-tag size='large' type="success">帐号</el-tag>
      </el-col>
      <el-col :span=18>
        <el-input v-model="account" placeholder="请输入帐号" size='small'></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span=4>
        <el-tag size='large' type="success">输入密码</el-tag>
      </el-col>
      <el-col :span=18>
        <el-input v-model="password" placeholder="请输入密码" type="password" size='small'></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span=4>
        <el-tag size='large' type="success">重复密码</el-tag>
      </el-col>
      <el-col :span=18>
        <el-input v-model="repeatps" placeholder="请重复密码" type="password" @keyup.enter.native="register" size='small'></el-input>
      </el-col>
    </el-row>
    <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
      <img v-if="imageUrl" :src="imageUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon"></i>
    </el-upload>
    <el-button @click="register">注册</el-button>
    
  </div>
</template>

<script>
  export default {
    data () {
      return {
        account: '',
        password: '',
        repeatps: '',
        info: this.$store.state.info,
        imageUrl: ''
      }
    },
    methods: {
      handleAvatarSuccess (res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload (file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      register () {
        let account = this.account;
        let password = this.password;
        let repeatps = this.repeatps;
        if (account === '' || password === '') {
          this.$message.warning('请输入注册帐号和密码');
          return;
        }
        if (password !== repeatps) {
          this.$message.warning('输入密码不一致');
          this.repeatps = ''
        } else {
          let person = {
            account,
            password,
            image: this.imageUrl ? this.imageUrl : 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256'
          }
          let current = {
            account,
            image: this.imageUrl ? this.imageUrl : 'https://sfault-avatar.b0.upaiyun.com/147/223/147223148-573297d0913c5_huge256'
          }
          let infos = this.info;
          for (var i = 0; i < infos.length; i++) {
            if (infos[i].account === account) {
              break;
            }
          }
          if (i === infos.length) {
            this.$store.dispatch('register', person);
            this.$store.dispatch('login', current);
            this.$router.push('home');
          } else {
            this.$message.warning('帐号已经被注册');
          }
        }
      }
    }
  }
</script>

<style>
  .register {
    margin: 5% 25%;
    padding-top: 0;
  }
   .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #20a0ff;
  }
   .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
