<template>
  <div id="background">
    <div id="logo">117dogteam</div>
    <div id="login">
      <div id="form">
        <div id="input">
          <el-input v-model="username" placeholder="请输入内容"></el-input>
        </div>
        <div id="input">
          <el-input
            placeholder="请输入密码"
            v-model="password"
            show-password
          ></el-input>
        </div>
        <el-button type="primary" id="btn" @click="submit()">登录</el-button>
      </div>
    </div>
  </div>
</template>

<style >
#background {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-image: linear-gradient(90deg, cyan, purple);
  background-size: 200%;
  animation: myanimation 5s infinite;
}
@keyframes myanimation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
#logo {
  color: aliceblue;
  font-size: 25px;
  font-weight: 800;
  text-transform: uppercase;
  position: absolute;
  top: 15%;
  left: 15%;
}
#login {
  position: absolute;
  top: 30%;
  left: 38%;
}
#form {
  width: 373px;
  height: 210px;
  background-color: rgba(255, 255, 255, 0.4);
  line-height: 30px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#input {
  /* margin-left: 5px; */
  width: 300px;
  margin-top: 30px;
}
#btn {
  margin-top: 20px;
}
</style>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    submit() {
      this.$axios
        .post(
          "https://mockapi.eolink.com/iF4PAdZcc57e7877f213b985b3bd1753c7c6b1819d7bfe4/login?responseId=1257321",
          {
            username:this.username,
            password:this.password,
          }
        )
        .then(
          (res) => {
            console.log("好评了");
          },
          (err) => {
            console.log('cuole');
          }
        );
    },
  },
};
</script>