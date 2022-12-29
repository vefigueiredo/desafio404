<template>
  <header>{{ text }}</header>
</template>

<script>

export default {
  name: 'Ihavebad',
  props: {
    text: {
      type: String,
      default: 'I have bad news for you'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500;600;700&family=Space+Mono:wght@400;700&display=swap');
header {
  position: absolute;
  width: 586px;
  height: 190px;
  left: 735px;
  top: 265px;

  font-family: 'Space Mono';
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 95px;
  letter-spacing: -0.035em;

/* Gray 1 */

color: #333333;
}
</style>
