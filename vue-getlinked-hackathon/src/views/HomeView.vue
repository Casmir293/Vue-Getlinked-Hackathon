<template>
  <header>
    <header-nav />
  </header>

  <main>
    <transition name="slide-down-fade" appear>
      <features />
    </transition>

    <transition name="slide-down-fade" appear>
      <overview />
    </transition>

    <transition name="slide-down-fade" appear>
      <faq />
    </transition>
  </main>

  <footer></footer>
</template>

<script setup>
import HeaderNav from "../components/HeaderNavComp.vue";
import Features from "../components/FeaturesComp.vue";
import Overview from "../components/OverviewComp.vue";
import Faq from "../components/FaqComp.vue";
</script>

<style lang="scss">
main {
  margin-top: 80.5px;
}

// Transition
.slide-down-fade-enter-from {
  opacity: 0;
  transform: translateY(100%);
}
.slide-down-fade-enter-active {
  transition: all 2.5s ease;
}

// Media Query for Laptop
@media only screen and (min-width: 992px) {
  main {
    margin-top: 117.5px;
  }
}
</style>
