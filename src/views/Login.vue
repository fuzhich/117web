<template>
  <div id="background">
    <!-- <div id="bobo"><img src="../assets/气泡1.png" alt=""></div> -->
    <div class="box"></div>

    <div ><img id="logo1" src="../assets/117logo.png" /></div>
    <div id="logo2">DOGTEAM</div>
    <div id="logo3">made by 117 from CQUPT @3478789463.qq.com</div>
    <div id="login">
      <div id="form">
        <div id="input">
          <el-input v-model="username" placeholder="请输入用户名"></el-input>
        </div>
        <div id="input">
          <el-input
            placeholder="请输入密码" v-model="password"
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
  animation: myanimation 7s infinite;
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

#logo1 {
  position: absolute;
  height: 70px;
  width: 150px;
  top: 70%;
  left: 42%;
}

#logo2 {
  position: absolute;
  font-weight: 800;
  font-size: 30px;
  color: aliceblue;
  top: 10%;
  left: 10%;
}

#logo3 {
  position: absolute;
  color: aliceblue;
  font-size: 10px;
  top: 95%;
  left: 43%;
}

#login {
  position: absolute;
  top: 30%;
  left: 38%;
}

#form {
  width: 373px;
  height: 210px;
  background-color: rgba(255, 255, 255, 0.3);
  line-height: 30px;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#input {
  width: 300px;
  margin-top: 30px;
}

#btn {
  margin-top: 20px;
}

#bobo {
  width: 300px;
  height: 300px;
  animation: auto 4s linear infinite;
  @keyframes auto {
  0% {
    background-position-y: 500px;
  }
  100% {
    background-position-y: -500px;
  }
}
}

.box {
				margin: 0 auto;
				width: 75px;
				height: 100px;
				background: url('../assets/猫.png');
        background-size: 500px 100%;
				/* 动画名称 */
				animation-name: run;
				/* 动画的过渡类型 */
				animation-timing-function: steps(7);
				/* 动画的持续时间 */
				animation-duration: 1s;
				/* 动画的循环次数 */
				animation-iteration-count: infinite;
        position: absolute;
        top: 68%;
        left: 54%;

			}

			@keyframes run {
				from {
					background-position: 0 0;
				}

				to {
					background-position: 500px 0;
				}
			}

</style>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      iamge: "C://Users//陈乐e//Desktop//vue//117//src//assets//117logo.png",
    };
  },
  methods: {
    submit() {
      this.$axios.post(
          "sso/login",
          {
            username: this.username,
            password: this.password,
          }
        )
        .then(
          (res) => {
            console.log(JSON.stringify(res.data.Code));
          },
          (err) => {
            console.log(JSON.stringify(err.data.Code));
          }
        );
    },
  },
};
</script>