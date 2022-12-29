<template>
  <header>{{ text }}</header>
</template>

<script>

export default {
  name: 'Header404',
  props: {
    text: {
      type: String,
      default: 'The page you are looking for might be removed or is temporarily unavailable'
    },
    checkbox: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500;600;700&family=Space+Mono:wght@400;700&display=swap');
header {
  position: absolute;
width: 381px;
height: 108px;
left: 736px;
top: 491px;

font-family: 'Space Mono';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 36px;
letter-spacing: -0.035em;

/* Gray 2 */

color: #4F4F4F;
}
</style>
