<template>
  <section class="confirmation">
    <section class="congrats">
      <div class="top">
        <img
          loading="lazy"
          class="check"
          src="/imgs/successful.png"
          alt="check"
        />
        <img
          loading="lazy"
          class="child"
          src="/imgs/success.png"
          alt="happy-child"
        />
      </div>

      <p class="p1">
        Congratulations <br />
        you have successfully Registered!
      </p>

      <p class="p2">
        Yes, it was easy and you did it! <br />
        check your mail box for next step 😉
      </p>

      <div class="register-btn"><a href="">Back</a></div>
    </section>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
* {
  background: transparent;
}

.top {
  padding-top: 32px;
  display: flex;
  justify-content: center;
  img {
    display: inline;
    width: 50%;
  }

  .check {
    width: 50%;
    margin-right: -100px;
  }
}

p {
  padding: 16px 16px;
  text-align: center;
  line-height: 1.5;
}

.p1 {
  margin: auto;
  font-size: 16px;
  font-weight: 600;
}

.register-btn {
  border-radius: 4px;
  width: 90%;
  height: 53px;
  background: $gradient;
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 30px auto;
  color: #fff;
  border: none;
  a {
    background-color: inherit;
    font-size: 16px;
    color: #fff;
    text-decoration: none;
  }
}

// Media Query for Laptop
@media only screen and (min-width: 992px) {
  .p1 {
    font-size: 20px;
  }
}
</style>
