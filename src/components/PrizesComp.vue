<template>
  <section class="prizes">
    <img class="star star-1" src="/imgs/p-star.png" alt="star" />
    <img class="star star-2" src="/imgs/p-star.png" alt="star" /><img
      class="star star-3"
      src="/imgs/big-white-star.png"
      alt="star"
    />
    <img class="star star-4" src="/imgs/big-white-star.png" alt="star" /><img
      class="star star-5"
      src="/imgs/star.png"
      alt="star"
    />

    <section class="prizes-top">
      <p class="prize-head">Prizes and <span>Rewards</span></p>
      <p class="prize-body">
        Highlight of the prizes or rewards for winners and for participants.
      </p>
    </section>

    <section v-motion-pop-visible-once class="prize-bottom">
      <div class="trophy-img">
        <img v-motion-fade-visible-once src="/imgs/trophy.png" alt="Trophy" />
      </div>
      <div class="medal-img">
        <div class="silver">
          <img src="/imgs/silver.png" alt="silver" />
          <div class="small">
            <b>2nd</b> <br />
            Runner <br />
            <span>N300,000</span>
          </div>
        </div>
        <div class="gold">
          <img src="/imgs/gold.png" alt="gold" />

          <div class="large">
            <b>1st</b> <br />
            Runner <br />
            <span>N400,000</span>
          </div>
        </div>
        <div class="bronze">
          <img src="/imgs/bronze.png" alt="bronze" />

          <div class="small">
            <b>3rd</b> <br />
            Runner <br />
            <span>N150,000</span>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "../assets/scss/prizes";
</style>
