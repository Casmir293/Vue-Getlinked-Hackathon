<template>
  <header>
    <section class="home-header">
      <div class="logo">
        <router-link to="/">get<span>linked</span></router-link>
      </div>

      <!-- Laptop Menu -->
      <nav class="laptop-menu">
        <ul>
          <li><router-link to="/#timeline">Timeline</router-link></li>
          <li><router-link to="/#overview">Overview</router-link></li>
          <li><router-link to="/#faq">FAQs</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
        <div class="register-btn">
          <router-link to="/register">Register</router-link>
        </div>
      </nav>
    </section>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
    >
      <circle cx="11.5" cy="11.5" r="11" stroke="url(#paint0_linear_177_298)" />
      <path
        d="M12.2666 9.20001L9.19995 12.2667L12.2666 14.5667"
        stroke="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_177_298"
          x1="11.5"
          y1="0"
          x2="11.5"
          y2="23"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#903AFF" />
          <stop offset="1" stop-color="#FF26B9" />
        </linearGradient>
      </defs>
    </svg>
  </header>

  <main>
    <!-- Mobile -->
    <section class="mobile-wrapper">
      <div class="topic">
        Questions or need assistance? Let us know about it
      </div>

      <p class="intro">Email us below to any question related to our event</p>

      <form action="">
        <input type="text" placeholder="Team's Name" />
        <input type="text" placeholder="Topic" />
        <input type="text" placeholder="Email" />
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <div>Submit</div>
      </form>
      <div class="social-media">
        <span>Follow us</span>
        <a href="https://www.instagram.com/getlinked.ai/" target="_blank"
          ><img src="/public/imgs/mdi_instagram.svg" alt="IG"
        /></a>
        <a href="https://twitter.com/getlinkedai" target="_blank"
          ><img src="/public/imgs/Vector.svg" alt="twitter"
        /></a>
        <a href="https://www.facebook.com/getLinkedai" target="_blank"
          ><img src="/public/imgs/Vector (1).svg" alt="facebook"
        /></a>
        <a href="https://www.linkedin.com/company/getlinked-ai/" target="_blank"
          ><img src="/public/imgs/ri_linkedin-fill.svg" alt="linkedin"
        /></a>
      </div>
    </section>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

svg {
  margin: 16px;
}

.home-header {
  display: none;
  align-items: center;
  justify-content: space-between;
  padding: 16px 32px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10;

  .logo {
    a {
      font-family: $header-font;
      font-size: 32px;
      font-weight: 700;
      text-decoration: none;
      color: #fff;
      span {
        color: $light-purple;
      }
    }
  }

  .laptop-menu {
    display: none;
  }
}

.register-btn {
  border-radius: 4px;
  width: 172px;
  height: 53px;
  background: $gradient;
  justify-content: center;
  align-items: center;
  display: flex;
  margin-left: 32px;
  margin-top: 30px;
  a {
    background-color: inherit;
    font-size: 16px;
    color: #fff;
    text-decoration: none;
  }
}

// Media Query for Ipad
@media only screen and (min-width: 576px) {
}

// Media Query for Laptop
@media only screen and (min-width: 992px) {
  svg {
    display: none;
  }
  .home-header {
    display: flex;
    padding: 48px 100px 16px 100px;

    .laptop-menu {
      display: flex;
      ul {
        padding: 0px 50px;
        display: flex;
        align-items: center;
        margin: 0;
        li {
          font-family: $body-font;
          list-style: none;
          padding: 0 48px;
          a {
            color: #fff;
            text-decoration: none;
            font-size: 16px;
            transition: 0.5s;
            cursor: pointer;
            &:hover {
              color: $light-purple;
              font-weight: 900px;
              transition: 0.5s;
            }
          }
        }
      }
    }
  }

  .register-btn {
    margin-top: 0px;
    transition: 0.5s;
    &:hover {
      transform: scale(1.2);
      transition: 0.5s;
    }
  }
}
</style>
