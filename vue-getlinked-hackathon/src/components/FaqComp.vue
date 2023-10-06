<template>
  <section class="faq" id="faq">
    <section class="faq-top">
      <img class="star star-1" src="/public/imgs/p-star.png" alt="star" />
      <p class="faq-heading">Frequently Ask <span>Question</span></p>
      <p class="faq-paragraph">
        We got answers to the questions that you might want to ask about
        <span>getlinked Hackathon 1.0</span>
      </p>

      <!-- Accordion -->
      <div v-motion-roll-visible-once-left class="faq-accordion">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Can I work on a project I started before the hackathon?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">Yes, you can.</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                What happens if I need help during the hackathon?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                You can always reach out to our agents at any point in time.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                What happens if I don't have an idea for a project?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                Reachout to us via our email and we'll clarify you further on
                how to go about the project.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                Can I join a team or do I have to come with one?
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">Both options are acceptable</div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                What happens after the hackathon ends
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingFive"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                The winners would be awarded accordinly
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingSix">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSix"
                aria-expanded="false"
                aria-controls="flush-collapseSix"
              >
                Can I work on a project I started before the hackathon?
              </button>
            </h2>
            <div
              id="flush-collapseSix"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingSix"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">Sure! you can.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="faq-bottom">
      <img class="star star-2" src="/public/imgs/star.png" alt="star" />
      <img class="star star-3" src="/public/imgs/p-star.png" alt="star" />
      <img class="star star-4" src="/public/imgs/p-star.png" alt="star" />
      <img
        class="star star-5"
        src="/public/imgs/big-white-star.png"
        alt="star"
      />
      <div class="question-mark">?<span>?</span>?</div>
      <img
        v-motion-roll-visible-once-right
        class="think-img"
        src="/public/imgs/thinking-man.png"
        alt="thinking"
      />
    </section>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "../assets/scss/faq";
</style>
