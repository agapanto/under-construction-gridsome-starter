<template>
  <div class="layout">
    <Header/>
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
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap');

$purple: #2c172f;

html {
  overflow-y:scroll;
}

body {
  &.bg-shattered {
    background-image: url('~@/assets/images/shattered-background.png');
    background-color: #4d0059 !important;
    color: white !important;
    text-shadow: 0.06rem 0.1rem 0.12rem $purple;
  }

  &.bg-purple {
    background-color: $purple !important;
    color: white !important;
  }
}


#app {
  font-family: 'Noto Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

h1 {
  font-family: 'Bungee', sans-serif;
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
}

.social-icons {
  font-family: 'Bungee', sans-serif;
}

nav, .btn {
  font-family: 'Source Code Pro', monospace;
  font-weight: bold;
  text-transform: uppercase;
  word-spacing: -0.16rem;
}
</style>
