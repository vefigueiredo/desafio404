<template>
  <header>{{ text }}</header>
</template>

<script>
// Imports

export default {
  name: 'Header',
  props: {
    text: {
      type: String
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500;600;700&family=Space+Mono:wght@400;700&display=swap');
header {
  font-family: Inconsolata;
  font-size: 24px;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: -0.08em;
  text-align: left;
  margin: 2vw 0 0 2vw;
}
</style>
