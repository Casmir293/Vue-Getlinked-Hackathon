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
    <router-link to="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        viewBox="0 0 23 23"
        fill="none"
      >
        <circle
          cx="11.5"
          cy="11.5"
          r="11"
          stroke="url(#paint0_linear_177_298)"
        />
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
    </router-link>
  </header>

  <main>
    <img
      class="background-img"
      src="/public/imgs/purple-1.png"
      alt="background-img"
    />
    <img class="star star-1" src="/public/imgs/big-white-star.png" alt="star" />
    <img class="star star-2" src="/public/imgs/star.png" alt="star" />
    <img class="star star-3" src="/public/imgs/p-star.png" alt="star" />
    <img class="star star-4" src="/public/imgs/p-star.png" alt="star" />
    <!-- Mobile -->
    <section v-motion-slide-bottom class="mobile-wrapper">
      <div class="topic">
        Questions or need assistance? <br />
        Let us know about it
      </div>

      <p class="intro">Email us below to any question related to our event</p>

      <form
        action="https://backend.getlinked.ai/hackathon/contact-form"
        method="post"
      >
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          required
        />
        <input type="email" name="email" placeholder="Email" required />
        <textarea
          name="message"
          id=""
          cols="30"
          rows="6"
          placeholder="Message"
          required
        ></textarea>
        <button type="submit" class="register-btn">Submit</button>
      </form>
      <div class="social-media">
        <span>Share on</span> <br />
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

    <!-- iPad -->
    <section class="ipad-wrapper">
      <div v-motion-slide-left class="left">
        <div class="title">Get in touch</div>
        <p>
          Contact <br />
          Information
        </p>
        <p>
          27,Alara Street <br />
          Yaba 100012 <br />
          Lagos State
        </p>
        <p>Call Us : 07067981819</p>
        <p>
          we are open from Monday-Friday <br />
          08:00am - 05:00pm
        </p>
        <div class="social-media">
          <span>Share on</span> <br />
          <a href="https://www.instagram.com/getlinked.ai/" target="_blank"
            ><img src="/public/imgs/mdi_instagram.svg" alt="IG"
          /></a>
          <a href="https://twitter.com/getlinkedai" target="_blank"
            ><img src="/public/imgs/Vector.svg" alt="twitter"
          /></a>
          <a href="https://www.facebook.com/getLinkedai" target="_blank"
            ><img src="/public/imgs/Vector (1).svg" alt="facebook"
          /></a>
          <a
            href="https://www.linkedin.com/company/getlinked-ai/"
            target="_blank"
            ><img src="/public/imgs/ri_linkedin-fill.svg" alt="linkedin"
          /></a>
        </div>
      </div>

      <div v-motion-slide-right class="right">
        <div class="topic">
          Questions or need assistance? <br />
          Let us know about it!
        </div>

        <form
          action="https://backend.getlinked.ai/hackathon/contact-form"
          method="post"
        >
          <input
            type="text"
            name="first_name"
            placeholder="First Name"
            required
          />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="6"
            placeholder="Message"
            required
          ></textarea>
          <button type="submit" class="register-btn">Submit</button>
        </form>
      </div>
    </section>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

* {
  background: transparent;
}

.ipad-wrapper {
  display: none;
}

svg {
  margin: 32px 32px 0px 32px;
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

.mobile-wrapper {
  margin: 32px;
  z-index: 1;
  position: relative;
  .topic {
    color: $light-purple;
    font-family: $header-font;
    font-size: 20px;
    font-weight: 600;
    width: 195px;
  }

  .intro {
    margin: 32px 0px;
    width: 239px;
    font-size: 12px;
  }

  form {
    input {
      display: block;
      margin-bottom: 32px;
      width: 100%;
      padding: 16px 20px;
      border-radius: 4px;
      border: 1px solid #fff;
      background: rgba(255, 255, 255, 0.03);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      color: #fff;
      font-size: 16px;
      &::placeholder {
        font-size: 16px;
      }
      &:focus {
        outline-color: $light-purple;
      }
    }

    textarea {
      width: 100%;
      border-radius: 4px;
      border: 1px solid #fff;
      color: #fff;
      background: rgba(255, 255, 255, 0.03);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      padding: 32px 20px;
      font-size: 16px;
      &::placeholder {
        font-size: 16px;
      }
      &:focus {
        outline-color: $light-purple;
      }
    }

    .register-btn {
      margin: 32px auto;
    }
  }

  .social-media {
    text-align: center;
    font-size: 12px;
    color: $light-purple;
    img {
      display: inline;
      margin: 8px;
      width: 15px;
      height: 15px;
    }
  }
}

main {
  position: relative;
}

.background-img {
  position: absolute;
  top: 0px;
  left: -100px;
  opacity: 0.3;
}

// stars- start
.star {
  width: 15px;
  height: auto;
  position: absolute;
}

.star-1 {
  top: 550px;
  left: 350px;
  animation: blink 0.5s infinite;
}

.star-2 {
  top: 20px;
  left: 310px;
  animation: blink 2s infinite;
}

.star-3 {
  top: 650px;
  left: 50px;
  animation: blink 1.5s infinite;
}

.star-4 {
  top: -50px;
  left: 170px;
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
// Media Query for Ipad
@media only screen and (min-width: 576px) {
  .mobile-wrapper {
    display: none;
  }

  .ipad-wrapper {
    display: grid;
    align-items: center;
    grid-template-columns: 30% 70%;
    margin: 32px 16px 0px 16px;
  }

  .left {
    z-index: 1;
    position: relative;
    .title {
      font-family: $header-font;
      font-size: 20px;
      color: $light-purple;
      font-weight: 600;
    }

    p {
      font-size: 16px;
      margin: 32px 0px;
    }

    .social-media {
      font-size: 16px;
      color: $light-purple;
      img {
        display: inline;
        margin: 8px;
        width: 15px;
        height: 15px;
      }
    }
  }

  .right {
    z-index: 1;
    position: relative;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 32px;
    .topic {
      color: $light-purple;
      font-family: $header-font;
      font-size: 20px;
      font-weight: 600;
      line-height: 1.5;
    }

    form {
      margin-top: 32px;
      input {
        display: block;
        margin-bottom: 32px;
        width: 100%;
        padding: 16px 20px;
        border-radius: 4px;
        border: 1px solid #fff;
        background: rgba(255, 255, 255, 0.03);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        color: #fff;
        font-size: 16px;
        &::placeholder {
          font-size: 16px;
        }
        &:focus {
          outline-color: $light-purple;
        }
      }

      textarea {
        width: 100%;
        border-radius: 4px;
        border: 1px solid #fff;
        color: #fff;
        background: rgba(255, 255, 255, 0.03);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        padding: 32px 20px;
        font-size: 16px;
        &::placeholder {
          font-size: 16px;
        }
        &:focus {
          outline-color: $light-purple;
        }
      }

      .register-btn {
        margin: 32px auto;
      }
    }

    .social-media {
      text-align: center;
      font-size: 12px;
      color: $light-purple;
      img {
        display: inline;
        margin: 8px;
        width: 15px;
        height: 15px;
      }
    }
  }
}

// Media Query for Laptop
@media only screen and (min-width: 992px) {
  svg {
    display: none;
  }
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

  .ipad-wrapper {
    grid-template-columns: 50% 50%;
    margin: 150px 100px 0px 100px;
  }

  .background-img {
    top: -100px;
    left: -400px;
    opacity: 0.2;
    width: 70%;
  }

  .star {
    width: 25px;
  }

  .star-3 {
    top: 250px;
    left: 550px;
    animation: blink 1.5s infinite;
  }

  .star-4 {
    top: 0px;
    left: 1200px;
    animation: blink 1s infinite;
  }
}
</style>
