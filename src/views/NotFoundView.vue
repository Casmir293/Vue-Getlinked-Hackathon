<template>
  <section>
    <img class="background-img" src="/imgs/purple-1.png" alt="background-img" />
    <img class="star star-1" src="/imgs/big-white-star.png" alt="star" />
    <img class="star star-2" src="/imgs/star.png" alt="star" />
    <img class="star star-3" src="/imgs/p-star.png" alt="star" />
    <img class="star star-4" src="/imgs/p-star.png" alt="star" />
    <div>
      <h2>404 ERROR</h2>
      <p>Sorry, the page was not found</p>
      <router-link to="/">Back to home</router-link>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
* {
  background: transparent;
}

section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  div {
    text-align: center;
    z-index: 1;
    h2 {
      font-family: $header-font;
      margin-bottom: 30px;
    }
    a {
      border-radius: 4px;
      width: 172px;
      height: 53px;
      background: $gradient;
      justify-content: center;
      align-items: center;
      display: flex;
      margin: 30px auto;
      color: #fff;
      border: none;
      background-color: inherit;
      font-size: 16px;
      color: #fff;
      text-decoration: none;
    }
  }
}

.background-img {
  position: absolute;
  top: 0px;
  left: -10%;
  opacity: 0.3;
  width: 70%;
}

// stars- start
.star {
  width: 15px;
  height: auto;
  position: absolute;
}

.star-1 {
  top: 10%;
  left: 90%;
  animation: blink 0.5s infinite;
}

.star-2 {
  top: 70%;
  left: 50%;
  animation: blink 2s infinite;
}

.star-3 {
  top: 80%;
  left: 10%;
  animation: blink 1.5s infinite;
}

.star-4 {
  top: 30%;
  left: 50%;
  animation: blink 1s infinite;
}

// stars- end

@keyframes blink {
  0%,
  100% {
    opacity: 0.3;
  }
  50% {
    opacity: 1;
  }
}

// Media Query for Laptop
@media only screen and (min-width: 992px) {
  * {
    font-size: 32px;
  }

  .star {
    width: 25px;
  }
}
</style>
