<template>
  <section class="partner">
    <img
      class="background-img background-img-1"
      src="/public/imgs/purple-1.png"
      alt="background-img"
    />
    <img
      class="background-img background-img-2"
      src="/public/imgs/purple-1.png"
      alt="background-img"
    />
    <img class="star star-1" src="/public/imgs/p-star.png" alt="star" />
    <img class="star star-2" src="/public/imgs/p-star.png" alt="star" />
    <img class="star star-3" src="/public/imgs/big-white-star.png" alt="star" />
    <section class="partner-top">
      <p class="partner-head">Partners and Sponsors</p>
      <p class="partner-body">
        Getlinked Hackathon 1.0 is honored to have the following major companies
        as its partners and sponsors
      </p>
    </section>

    <section class="partner-bottom">
      <div v-motion-pop-visible-once class="sponsor-border">
        <div class="sponsor-top">
          <div class="sponsor">
            <img src="/public/imgs/img-1.png" alt="sponsor" />
          </div>
          <div class="sponsor-line"></div>
          <div class="sponsor">
            <img src="/public/imgs/img-2.png" alt="sponsor" />
          </div>
          <div class="sponsor-line"></div>
          <div class="sponsor">
            <img src="/public/imgs/img-3.png" alt="sponsor" />
          </div>
        </div>
        <div class="sponsor-center">
          <div class="hr-line"></div>
          <div class="hr-line"></div>
          <div class="hr-line"></div>
        </div>
        <div class="sponsor-bottom">
          <div class="sponsor">
            <img src="/public/imgs/img-4.png" alt="sponsor" />
          </div>
          <div class="sponsor-line"></div>
          <div class="sponsor">
            <div class="paybox">pay<span>box</span></div>
          </div>
          <div class="sponsor-line"></div>
          <div class="sponsor">
            <div class="vuzual">
              <div>Vuzual <span>Plus</span></div>
              <p class="design">Design Studios</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "../assets/scss/partner";
</style>
