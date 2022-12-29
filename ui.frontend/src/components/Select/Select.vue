<template>
  <select>
    <option value="">{{ valorInicial }}</option>
    <option value="A">A</option>
    <option value="B">B</option>
  </select>
</template>

<script>
// Imports

export default {
  name: 'Select',
  props: {
    valorInicial: {
      type: String,
      default: 'Selecione'
    }
  }
}
</script>

<style>
/* CSS */
</style>
