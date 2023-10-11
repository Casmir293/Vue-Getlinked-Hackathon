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
    <div class="head">Register</div>
  </header>

  <main>
    <section class="left">
      <img src="/public/imgs/man-sit.png" alt="smart-boy" />
    </section>

    <section class="right">
      <div class="head-2">Register</div>
      <div class="small-head">
        Be part of this movement! &nbsp; <span>🚶‍♂️🚶‍♀️</span>
      </div>

      <div class="big-head">CREATE YOUR ACCOUNT</div>

      <form
        action="https://backend.getlinked.ai/hackathon/registration"
        method="post"
      >
        <div class="cat-grid">
          <div>
            <label for="team_name">Team's Name</label> <br />
            <input
              type="text"
              id="team_name"
              name="team_name"
              placeholder="Enter the name of your group"
              required
            />
          </div>

          <div>
            <label for="phone_number">Phone</label> <br />
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              placeholder="Enter your phone number"
              required
            />
          </div>
        </div>
        <br />

        <div class="cat-grid">
          <div>
            <label for="email">Email</label> <br />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              required
            />
          </div>

          <div>
            <label for="project_topic">Project Topic</label> <br />
            <input
              type="text"
              id="project_topic"
              name="project_topic"
              placeholder="What is your group project topic"
              required
            />
          </div>
        </div>

        <br />

        <div class="category-grid">
          <div>
            <label for="category">Category</label> <br />
            <select id="category" name="category" required>
              <option value="" selected disabled>Select your category</option>
              <option value="1">MOBILE</option>
              <option value="2">WEB</option>
              <option value="3">BACKEND</option>
            </select>
          </div>

          <div>
            <label for="group_size">Group Size</label> <br />
            <select id="group_size" name="group_size" required>
              <option value="" selected disabled>Select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>

        <p>Please review your registration details before submitting</p>

        <div class="agree-grid">
          <input
            class="agree"
            type="checkbox"
            id="privacy_poclicy_accepted"
            name="privacy_poclicy_accepted"
            value="false"
            required
          />
          <label for="privacy_poclicy_accepted">
            I agreed with the event terms and conditions and privacy
            policy</label
          >
        </div>

        <button class="register-btn" type="submit">Submit</button>
      </form>
    </section>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/scss/variables";

* {
  background: transparent;
}

.head {
  font-size: 16px;
  font-family: $header-font;
  color: $light-purple;
  font-weight: 600;
  margin: 32px;
}

.head-2 {
  display: none;
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

main {
  margin: 16px 32px 16px 32px;
}

.right {
  .small-head {
    font-size: 12px;
    span {
      font-size: 20px;
      transform: scaleX(-1);
      display: inline-block;
      padding: 0 16px;
      border-bottom: 2px dotted $light-purple;
    }
  }

  .big-head {
    font-size: 20px;
    margin: 8px 0;
  }

  form {
    margin-top: 24px;
    font-size: 13px;
    input {
      margin-top: 8px;
      display: block;
      margin-bottom: 16px;
      width: 100%;
      padding: 16px 20px;
      border-radius: 4px;
      border: 1px solid #fff;
      background: rgba(255, 255, 255, 0.03);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      color: #fff;
      &::placeholder {
        font-size: 13px;
      }
      &:focus {
        outline-color: $light-purple;
      }
    }

    .category-grid {
      display: grid;
      grid-template-columns: 65% 30%;
      gap: 5%;
      select {
        margin-top: 8px;
        width: 100%;
        height: 39px;
        padding: 5px 10px;
        border-radius: 4px;
        border: 1px solid #fff;
        background: rgba(255, 255, 255, 0.03);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        color: #fff;
        &::placeholder {
          font-size: 13px;
        }
        &:focus {
          outline-color: $light-purple;
        }
      }
    }

    p {
      font-size: 12px;
      font-style: italic;
      color: #ff26b9;
      margin: 32px 0;
    }

    .agree-grid {
      display: flex;
      align-items: center;

      .agree {
        width: 20px;
        height: 20px;
        margin: 0 8px 0 0;
      }
    }

    .register-btn {
      margin: 16px auto;
    }
  }
}

// Media Query for Ipad
@media only screen and (min-width: 576px) {
  main {
    display: grid;
    grid-template-columns: 50% 50%;
    align-items: center;
  }

  .right {
    form {
      .register-btn {
        width: 100%;
      }
    }
  }
}

// Media Query for Laptop
@media only screen and (min-width: 992px) {
  .head {
    display: none;
  }

  .head-2 {
    display: block;
    font-size: 32px;
    font-family: $header-font;
    color: $light-purple;
    font-weight: 600;
    margin: 32px 0;
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

  main {
    margin: 120px 100px 100px 100px;
  }

  .right {
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.03);
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    padding: 32px 64px;

    .small-head {
      font-size: 14px;
      span {
        font-size: 30px;
      }
    }

    .big-head {
      font-size: 24px;
    }

    form {
      .cat-grid {
        display: grid;
        grid-template-columns: 47.5% 47.5%;
        gap: 5%;
      }
      .category-grid {
        grid-template-columns: 47.5% 47.5%;
        gap: 5%;
      }
    }
  }
}
</style>
