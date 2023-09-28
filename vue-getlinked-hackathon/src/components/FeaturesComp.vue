<template>
  <section class="features">
    <div class="igniting">
      <div class="igniting-left">
        Igniting a Revolution in
        <span class="igniting-right">
          <div class="top">HR Innovation</div>
          <div class="bottom">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="117"
              height="11"
              viewBox="0 0 117 11"
              fill="none"
            >
              <path
                d="M1 9C20.2424 3.71764 70.7273 -3.67768 116 9"
                stroke="#FF26B9"
                stroke-width="3"
              />
            </svg>
          </div>
        </span>
      </div>
    </div>

    <div class="main-feat">
      <div class="main-feat-left">
        <div class="getlinked">
          getlinked Te<span class="tech">
            <img class="idea" src="/public/imgs/idea.png" alt="idea" />
            c </span
          >h
        </div>
        <div class="hackathon">
          Hackathon <span>1.0</span
          ><img src="/public/imgs/chain.png" alt="chain" /><img
            src="/public/imgs/spark.png"
            alt="spark"
          />
        </div>
        <p>
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </p>
        <div class="register-btn">
          <router-link to="/register">Register</router-link>
        </div>
        <div class="time">
          <span>00</span> <span class="time-parameter">H</span> <span>00</span>
          <span class="time-parameter">M</span> <span>00</span>
          <span class="time-parameter">S</span>
        </div>
      </div>
      <div class="main-feat-right">
        <div class="boy-img"><img src="" alt="young-boy" /></div>
        <div class="animate-img"><img src="" alt="object" /></div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "../assets/scss/features";
</style>
