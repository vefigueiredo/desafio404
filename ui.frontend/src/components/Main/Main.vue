<template>
  <main>
    <div id="container-left">
      <img :src="imageUrl" alt="Espantalho" />
    </div>
    <div id="container-right">
      <h1>{{ title }}</h1>
      <p>
        {{ text }}
      </p>
      <button>{{ buttonLabel }}</button>
    </div>
  </main>
</template>

<script>
// Imports

export default {
  name: 'Main',
  props: {
    imageUrl: {
      type: String
    },
    title: {
      type: String
    },
    text: {
      type: String
    },
    buttonLabel: {
      type: String
    }
  },
  mounted () {
    console.log(this.image)
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100vh;

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    margin: 5% 0;

    #container-left {
      width: 50%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        max-width: 35vw;
      }
    }

    #container-right {
      display: flex;
      flex-direction: column;
      align-content: center;
      gap: 3vw;

      h1 {
        max-width: 35vw;
        font-family: Space Mono;
        font-size: 64px;
        font-weight: 700;
        line-height: 95px;
        letter-spacing: -0.035em;
        text-align: left;
        margin: 0;
      }

      p {
        max-width: 23vw;
        font-family: Space Mono;
        font-size: 24px;
        font-weight: 400;
        line-height: 36px;
        letter-spacing: -0.035em;
        text-align: left;
        margin: 0;
      }

      button {
        width: 216px;
        height: 68px;
        background: #333333;
        color: #fff;
        font-family: Space Mono;
        font-size: 14px;
        font-weight: 700;
        line-height: 21px;
        letter-spacing: -0.035em;
      }
    }
  }
}
</style>
