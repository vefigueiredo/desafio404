<template>
  <div>
    <div v-for="item in multifieldOne" :key="item.id">
      <h1>{{ item.textZero }}</h1>
      <button>{{ item.buttonOne }}</button>
    </div>
    <div v-for="item in multifieldTwo" :key="item.id">
      <h3>{{ item.textOne }}</h3>
      <h3>{{ item.textTwo }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MultifieldTab',
  props: {
    multifieldOne: {
      type: Array,
      default: () => [
        {
          textZero: 'Eu sou um texto',
          buttonOne: 'Eu sou um botão'
        }
      ]
    },
    multifieldTwo: {
      type: Array,
      default: () => [
        {
          textOne: 'Eu sou o texto 1',
          textTwo: 'Eu sou o texto 2'
        }
      ]
    }
  }
}
</script>
