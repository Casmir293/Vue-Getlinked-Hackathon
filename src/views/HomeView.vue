<template>
  <header>
    <header-nav />
  </header>

  <main>
    <transition name="slide-down-fade" appear>
      <features />
    </transition>

    <overview />

    <faq />

    <timeline />

    <prizes />

    <partner />

    <privacy />
  </main>

  <foot />
</template>

<script setup>
import HeaderNav from "../components/HeaderNavComp.vue";
import Features from "../components/FeaturesComp.vue";
import Overview from "../components/OverviewComp.vue";
import Faq from "../components/FaqComp.vue";
import Timeline from "../components/TimelineComp.vue";
import Prizes from "../components/PrizesComp.vue";
import Partner from "../components/PartnerComp.vue";
import Privacy from "../components/PrivacyComp.vue";
import Foot from "../components/FootComp.vue";
</script>

<style lang="scss" scoped>
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
