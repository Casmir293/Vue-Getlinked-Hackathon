<template>
  <section class="prizes">
    <img class="star star-1" src="/public/imgs/p-star.png" alt="star" />
    <img class="star star-2" src="/public/imgs/p-star.png" alt="star" /><img
      class="star star-3"
      src="/public/imgs/big-white-star.png"
      alt="star"
    />
    <img
      class="star star-4"
      src="/public/imgs/big-white-star.png"
      alt="star"
    /><img class="star star-5" src="/public/imgs/star.png" alt="star" />

    <section class="prizes-top">
      <p class="prize-head">Prizes and <span>Rewards</span></p>
      <p class="prize-body">
        Highlight of the prizes or rewards for winners and for participants.
      </p>
    </section>

    <section class="prize-bottom">
      <div class="trophy-img">
        <img src="/public/imgs/trophy.png" alt="Trophy" />
      </div>
      <div class="medal-img">
        <div class="silver">
          <img src="/public/imgs/silver.png" alt="silver" />
          <div class="small">
            <b>2nd</b> <br />
            Runner <br />
            <span>N300,000</span>
          </div>
        </div>
        <div class="gold">
          <img src="/public/imgs/gold.png" alt="gold" />

          <div class="large">
            <b>1st</b> <br />
            Runner <br />
            <span>N400,000</span>
          </div>
        </div>
        <div class="bronze">
          <img src="/public/imgs/bronze.png" alt="bronze" />

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
