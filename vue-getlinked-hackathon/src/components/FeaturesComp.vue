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
        <img
          class="background-img"
          src="/public/imgs/purple-1.png"
          alt="background-img"
        />
        <img
          class="star star-1"
          src="/public/imgs/big-white-star.png"
          alt="star"
        />
        <img class="star star-2" src="/public/imgs/star.png" alt="star" />
        <img class="star star-3" src="/public/imgs/star.png" alt="star" />
        <div class="getlinked">
          getlinked Te<span class="tech">
            <img class="idea" src="/public/imgs/idea.png" alt="idea" />c</span
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
          <span>{{ twoDigit(hour) }}</span
          ><span class="time-parameter">H</span> &nbsp;
          <span>{{ twoDigit(min) }}</span>
          <span class="time-parameter">M</span> &nbsp;
          <span>{{ twoDigit(sec) }}</span>
          <span class="time-parameter">S</span>
        </div>
      </div>

      <div v-motion-roll-bottom class="main-feat-right">
        <img
          class="background-img"
          src="/public/imgs/purple-1.png"
          alt="background-img"
        />
        <img class="boy-img" src="/public/imgs/smart-boy.png" alt="young-boy" />
        <img class="animate-img" src="/public/imgs/lights.png" alt="object" />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const hour = ref(0);
const min = ref(0);
const sec = ref(0);

const twoDigit = (value) => {
  return value < 10 ? `0${value}` : `${value}`;
};

const updateTime = () => {
  const now = new Date();
  hour.value = now.getHours();
  min.value = now.getMinutes();
  sec.value = now.getSeconds();
};

updateTime();

onMounted(() => {
  setInterval(updateTime, 1000);
});
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "../assets/scss/features";
</style>
