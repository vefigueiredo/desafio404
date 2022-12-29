<template>
  <img :src="src" />
</template>

<script>
export default {
  name: 'Espantalho',
  props: {
    src: {
      type: String,
      default: 'content/dam/vue/espantalho.png'
    }
  }
}
</script>

<style scoped>
img {
  position: absolute;
  left: 5.35%;
  right: 57.21%;
  top: 24.54%;
  bottom: 34.03%;
  width: 539.22px;
  height: 447.43px;
  top: 265px;
  left: 77px;
}
</style>
