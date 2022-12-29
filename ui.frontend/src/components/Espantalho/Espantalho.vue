<template>
  <img :src="src" class="header"/>
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

.header {
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

@media only screen and (max-width: 600px) {
  .header {
    position: absolute;
    left: 11.73%;
    right: 11.78%;
    top: 11.49%;
    bottom: 63.44%;
    width: 286.83px;
    height: 238px;
    top: 109px;
    left: 44px;
  }
}

</style>
