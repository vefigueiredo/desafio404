<template>
  <button><div>{{ buttonLabel }}</div></button>
</template>

<script>

export default {
  name: 'Botaoback',
  props: {
    buttonLabel: {
      type: String,
      default: 'BACK TO HOMEPAGE'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500;600;700&family=Space+Mono:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500;600;700&family=Space+Mono:wght@400;700&display=swap');
button {
  position: absolute;
  width: 216px;
  height: 68px;
  left: 740px;
  top: 663px;

  background: #333333;
}

div {

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  letter-spacing: -0.035em;
  text-transform: uppercase;

  color: #FFFFFF;
}
</style>
