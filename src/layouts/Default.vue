<template>
  <div class="layout">
    <!-- <Header/> -->
    <slot/>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Header from '../components/Header'

export default {
  components: {
    Footer,
    Header,
  },
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Bungee&display=swap');
@import url('https://fonts.googleapis.com/css?family=Biryani&display=swap');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:700&display=swap');

body{
  background-image: url('~@/assets/images/shattered-background.png');
  background-color: #4d0059 !important;
  color: white !important;
}

#app {
  font-family: 'Biryani', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

h1 {
  font-family: 'Bungee', cursive;
}

a {
  // color: lighten(#878afd, 8) !important;
  color: lighten(#4DC1EA, 12) !important;
}

a:hover {
  color: lighten(#878afd, 100) !important;
  text-decoration: underline;
}

.hello, footer {
  text-shadow: 1px 1px 1px black;
}

.social-icons {
  font-family: 'Bungee', cursive;
  text-shadow: 1px 1px 1px black;
}
</style>
