<template>
  <header class="header">{{ text }}</header>
</template>

<script>

export default {
  name: 'Header404',
  props: {
    text: {
      type: String,
      default: '404 NOT FOUND'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500;600;700&family=Space+Mono:wght@400;700&display=swap');

.header {
  position: absolute;
  width: 133px;
  height: 25px;
  left: 77px;
  top: 40px;

  font-family: 'Inconsolata';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 25px;
  letter-spacing: -0.08em;
  text-transform: uppercase;

  color: #333333;
}

@media only screen and (max-width: 600px) {
  .header {
    position: absolute;
    width: 133px;
    height: 25px;
    left: 24px;
    top: 20px;

    font-family: 'Inconsolata';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 25px;
    letter-spacing: -0.08em;
    text-transform: uppercase;

    color: #333333;
  }
}
</style>
