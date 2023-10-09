<template>
  <header>
    <section v-motion-slide-top class="home-header">
      <div class="logo">
        <router-link to="/">get<span>linked</span></router-link>
      </div>

      <!-- Laptop Menu -->
      <nav class="laptop-menu">
        <ul>
          <li><router-link to="/#timeline">Timeline</router-link></li>
          <li><router-link to="/#overview">Overview</router-link></li>
          <li><router-link to="/#faq">FAQs</router-link></li>
          <li class="contact">
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
        <div class="register-btn">
          <router-link to="/register">Register</router-link>
        </div>
      </nav>
    </section>
  </header>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

* {
  background: transparent;
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
  color: #fff;
  border: none;
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
  .home-header {
    display: flex;
    padding: 48px 100px 16px 100px;
    background-color: $dark-purple;

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
        .contact {
          a {
            background: $gradient;
            background-clip: text;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
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
