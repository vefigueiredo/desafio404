<template>
  <footer>
    <p v-html="text"></p>
  </footer>
</template>

<script>
// Imports

export default {
  name: 'Footer',
  props: {
    text: {
      type: String
    }
  }
}
</script>

<style>
footer {
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'Space Mono', monospace;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.04em;
}
</style>
