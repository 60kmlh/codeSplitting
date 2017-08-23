<template>
  <div>
    <button @click='loadHead'>loadHead</button>
    <Head v-if='showHead' />
    <button @click='loadTime'>loadTime</button>
    <Time v-if='showTime' />
  </div>
</template>

<script>
  const Head = r => require.ensure([], function() {
    r(require('./components/Head.vue'))
  }, 'Head')
  export default {
    data() {
      return {
        showTime: false,
        showHead: false
      }
    },
    components: {
      'Head': Head,
      'Time': () => System.import(/* webpackChunkName: "Time" */'./components/Time.vue')
    },
    methods: {
      loadHead() {
        this.showHead = true
      },
      loadTime() {
        this.showTime = true
      }
    }
  }
</script>