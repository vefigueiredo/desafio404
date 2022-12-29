<template>
  <div class="checkbox-vue" id="ckeckbox">
    <input type="checkbox" :name="field" />
    <label :for="field">{{ field }}</label>
  </div>
</template>

<script>
export default {
  name: 'Checkbox',
  props: {
    field: {
      type: String,
      default: 'Full Name'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
