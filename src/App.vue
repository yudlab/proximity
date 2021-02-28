<template>
  <div id="app">
    <Header />
    <Homepage />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Homepage from './components/Homepage.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Homepage,
    Footer
  }
}
</script>

<style lang="scss">

</style>
