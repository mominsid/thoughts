<template>
  <div id="app">
    <div id="nav">
      <router-link to="/" class="navLink">Home</router-link>
      <span class="navSeparator">|</span>
      <router-link to="/articles" class="navLink">Articles</router-link>
    </div>
    <div id="main">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/scss/variables.scss';
@import '@/scss/global-styles.scss';
#nav {
  text-align: center;
  padding: 30px;
  .navLink {
    &.router-link-exact-active {
      font-weight: bold;
    }
  }
  .navSeparator {
    padding: 0 5px;
  }
}
#main {
  text-align: center;
  width: 80%;
  max-width: 960px;
  min-width: 320px;
  margin: 0 auto;
}

</style>
