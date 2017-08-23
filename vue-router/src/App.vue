<template>
  <div>
    <router-link to="/">home</router-link>
    <router-link to="/time">time</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    methods: {
      goToHome() {
        this.$router.push('/')
      },
      goToHead() {
        this.$router.push('/time')
      }
    }
  }
</script>