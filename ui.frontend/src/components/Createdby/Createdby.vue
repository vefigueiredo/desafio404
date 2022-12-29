<template>
  <header class="header">{{ text }}</header>
</template>

<script>

export default {
  name: 'Createdby',
  props: {
    text: {
      type: String,
      default: 'Created by Vinicius - devChallenges.io'
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Montserrat:wght@500;600;700&family=Space+Mono:wght@400;700&display=swap');

.header {
  position: absolute;
  width: 287px;
  height: 17px;
  left: 577px;
  top: 1039px;

  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;

  text-align: center;

  color: #BDBDBD;

}

@media only screen and (max-width: 600px) {
  .header {
    position: absolute;
    width: 287px;
    height: 17px;
    left: 46px;
    top: 908px;

    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;

    text-align: center;

    color: #BDBDBD;
  }
}

</style>
