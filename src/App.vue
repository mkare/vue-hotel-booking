<template>
  <div id="app">
    <div class="logo text-center mt-4 mb-5">
      <img src="@/assets/images/booking.svg" width="60px">
      <h1 class="heading">
        <span>Otel</span>
        <span>Rezervasyon</span>
      </h1>
    </div>

    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.logo {
  .heading {
    color: #2c5b87;
    font-size: 1.7rem;
    font-weight: 900;
    position: relative;
    top: -.25rem;

    span {
      &:last-child {
        margin-left: .25rem;
      }
    }
  }
}
</style>
