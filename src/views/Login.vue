<template>
  <div>
    <button @click="login()">登录</button>
    <button @click="logout()">退出</button>
  </div>
</template>

<script>
export default {
  name: "login",
  methods: {
    login() {
      localStorage.setItem("token", 123123);
    },
    logout() {
      localStorage.removeItem("token");
    }
  }
};
</script>
