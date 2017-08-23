<template>
  <div>
    {{time}}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        time: new Date().toString(),
        t: null
      }
    },
    created() {
      this.updateTime()
    },
    methods: {
      updateTime() {
        var that = this
        this.t = setInterval(() => {
          that.time = new Date().toString()
        }, 1000)
      }
    }
  }
</script>