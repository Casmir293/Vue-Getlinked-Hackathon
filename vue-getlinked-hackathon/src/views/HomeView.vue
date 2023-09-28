<template>
  <header>
    <header-nav />
  </header>

  <main>
    <features />
  </main>

  <footer></footer>
</template>

<script setup>
import HeaderNav from "../components/HeaderNavComp.vue";
import Features from "../components/FeaturesComp.vue";
</script>

<style lang="scss">
main {
  margin-top: 80.5px;
}

// Media Query for Laptop
@media only screen and (min-width: 992px) {
  main {
    margin-top: 117.5px;
  }
}
</style>
