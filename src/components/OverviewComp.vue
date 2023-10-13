<template>
  <section class="details" id="overview">
    <section class="detail-flex detail-flex-1">
      <img class="star star-1" src="/imgs/p-star.png" alt="star" />
      <img class="star star-2" src="/imgs/p-star.png" alt="star" />
      <img v-motion-roll-left src="/imgs/big-idea.png" alt="The Big Idea" />
      <img class="arrow" src="/imgs/arrow.png" alt="arrow" />
      <div v-motion-roll-right>
        <p class="subtopic subtopic-1">
          Introduction to getlinked <span>tech Hackathon 1.0</span>
        </p>
        <p class="write-ups">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
    </section>

    <section class="detail-flex detail-flex-2">
      <img
        loading="lazy"
        class="background-img"
        src="/imgs/purple-1.png"
        alt="background"
      />
      <img
        loading="lazy"
        class="background-img-2"
        src="/imgs/purple-1.png"
        alt="background"
      />
      <img
        loading="lazy"
        class="star star-3"
        src="/imgs/big-white-star.png"
        alt="star"
      />
      <img loading="lazy" class="star star-4" src="/imgs/star.png" alt="star" />
      <img
        loading="lazy"
        class="star star-5"
        src="/imgs/big-white-star.png"
        alt="star"
      />
      <div v-motion-roll-left class="content-2">
        <p class="subtopic">Rules and <span>Guidelines</span></p>
        <p class="write-ups write-ups-2">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </div>
      <img
        loading="lazy"
        v-motion-roll-right
        src="/imgs/sitting-lady.png"
        alt="Sitting Lady"
        class="lady-img"
      />
    </section>

    <section class="detail-flex detail-flex-3">
      <img
        loading="lazy"
        class="background-img"
        src="/imgs/purple-1.png"
        alt="background"
      />
      <img
        loading="lazy"
        class="background-img-2"
        src="/imgs/purple-1.png"
        alt="background"
      />
      <img
        loading="lazy"
        class="star star-6"
        src="/imgs/p-star.png"
        alt="star"
      />
      <img loading="lazy" class="star star-7" src="/imgs/star.png" alt="star" />
      <img
        loading="lazy"
        class="star star-8"
        src="/imgs/big-white-star.png"
        alt="star"
      />
      <img
        loading="lazy"
        v-motion-roll-visible-once-left
        class="detail-img-3"
        src="/imgs/team.png"
        alt="Team Work"
      />
      <div class="judging">
        <p class="subtopic">Judging Criteria <span>Key attributes</span></p>

        <div class="write-ups">
          <p v-motion-roll-visible-once-right>
            <b>Innovation and Creativity:</b> Evaluate the uniqueness and
            creativity of the solution. Consider whether it addresses a
            real-world problem in a novel way or introduces innovative features.
          </p>
          <p v-motion-roll-visible-once-right>
            <b>Functionality:</b> Assess how well the solution works. Does it
            perform its intended functions effectively and without major issues?
            Judges would consider the completeness and robustness of the
            solution.
          </p>
          <p v-motion-roll-visible-once-right>
            <b>Impact and Relevance:</b> Determine the potential impact of the
            solution in the real world. Does it address a significant problem,
            and is it relevant to the target audience? Judges would assess the
            potential social, economic, or environmental benefits.
          </p>
          <p v-motion-roll-visible-once-right>
            <b>Technical Complexity:</b> Evaluate the technical sophistication
            of the solution. Judges would consider the complexity of the code,
            the use of advanced technologies or algorithms, and the scalability
            of the solution.
          </p>
          <p v-motion-roll-visible-once-right>
            <b>Adherence to Hackathon Rules:</b> Judges will Ensure that the
            team adhered to the rules and guidelines of the hackathon, including
            deadlines, use of specific technologies or APIs, and any other
            competition-specific requirements.
          </p>
        </div>
        <div class="register-btn"><a href="#">Read More</a></div>
      </div>
    </section>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "../assets/scss/overview";
</style>
