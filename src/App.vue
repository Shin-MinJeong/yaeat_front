<template>

  <div id="app">
    <div id="nav">
      <router-link to="/">Main</router-link>
      <router-link to="/sign">Sign</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/mypage">Mypage</router-link>
  </div>
  <router-view></router-view>
</div>

</template>

<script>

export default {
  data() {

  },

}
</script>

<style>

</style>
