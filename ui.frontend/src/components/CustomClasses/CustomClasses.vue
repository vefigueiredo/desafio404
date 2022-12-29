<template>
  <div this-component-is-responsible-to-allow-custom-classes-on-aem></div>
</template>

<script>
export default {
  name: 'CustomClasses',
  mounted () {
    const containerLeft = document.querySelector('[cqpath="/content/vue/vue/jcr:content/root/responsivegrid/container_1337994141"] div')
    containerLeft.classList.add('bg-gray')

    const containerRight = document.querySelector('[cqpath="/content/vue/vue/jcr:content/root/responsivegrid/container"] div')
    containerRight.classList.add('bg-green')
  }
}
</script>

<style lang="scss">
.bg-gray {
  background-color: gray;
  padding: 50px;
}
.bg-green {
  background-color: green;
  padding: 50px;
}
</style>
