<template>
  <section class="timeline" id="timeline">
    <img class="star star-1" src="/public/imgs/p-star.png" alt="star" />
    <img class="star star-2" src="/public/imgs/big-white-star.png" alt="star" />
    <img class="star star-3" src="/public/imgs/star.png" alt="star" />
    <div class="timeline-head">
      <p class="timeline-subhead">Timeline</p>
      <p class="timeline-subbody">
        Here is the breakdown of the time we anticipate using for the upcoming
        event.
      </p>
    </div>
    <!-- (Mobile-Phone) -->
    <section v-motion-slide-visible-once-right class="timeline-phone">
      <div class="time-wrapper">
        <div class="time-content">
          <p class="time-content-head">Hackathon Announcement</p>
          <p class="time-content-body">
            The getlinked tech hackathon 1.0 is formally announced to the
            general public and teams begin to get ready to register
          </p>
        </div>
        <div class="num-date">
          <div class="time-num">1</div>
          <div class="time-date">November 18, 2023</div>
        </div>
      </div>

      <div class="time-wrapper">
        <div class="time-content">
          <p class="time-content-head">Teams Registration begins</p>
          <p class="time-content-body">
            Interested teams can now show their interest in the getlinked tech
            hackathon 1.0 2023 by proceeding to register
          </p>
        </div>
        <div class="num-date">
          <div class="time-num">2</div>
          <div class="time-date">November 18, 2023</div>
        </div>
      </div>

      <div class="time-wrapper">
        <div class="time-content">
          <p class="time-content-head">Teams Registration ends</p>
          <p class="time-content-body">
            Interested Participants are no longer Allowed to register
          </p>
        </div>
        <div class="num-date">
          <div class="time-num">3</div>
          <div class="time-date">November 18, 2023</div>
        </div>
      </div>

      <div class="time-wrapper">
        <div class="time-content">
          <p class="time-content-head">
            Announcement of the accepted teams and ideas
          </p>
          <p class="time-content-body">
            All teams whom idea has been accepted into getlinked tech hackathon
            1.0 2023 are formally announced
          </p>
        </div>
        <div class="num-date">
          <div class="time-num">4</div>
          <div class="time-date">November 18, 2023</div>
        </div>
      </div>

      <div class="time-wrapper">
        <div class="time-content">
          <p class="time-content-head">
            Getlinked Hackathon 1.0 Offically Begins
          </p>
          <p class="time-content-body">
            Accepted teams can now proceed to build their ground breaking skill
            driven solutions
          </p>
        </div>
        <div class="num-date">
          <div class="time-num">5</div>
          <div class="time-date">November 18, 2023</div>
        </div>
      </div>

      <div class="time-wrapper">
        <div class="time-content">
          <p class="time-content-head">Demo Day</p>
          <p class="time-content-body">
            Teams get the opportunity to pitch their projects to judges. The
            winner of the hackathon will also be announced on this day
          </p>
        </div>
        <div class="num-date">
          <div class="time-num">6</div>
          <div class="time-date">November 18, 2023</div>
        </div>
      </div>
    </section>

    <!-- (Desktop) -->
    <section class="timeline-desktop">
      <div class="desk-wrapper">
        <div v-motion-slide-visible-once-left class="desk-details text-end">
          <div class="desk-head">Hackathon Announcement</div>
          <div class="desk-body">
            The getlinked tech hackathon 1.0 is formally announced to the
            general public and teams begin to get ready to register
          </div>
        </div>
        <div v-motion-pop-visible-once class="desk-num">
          <p></p>
          <div>1</div>
        </div>
        <div v-motion-slide-visible-once-right class="desk-date">
          November 18, 2023
        </div>
      </div>

      <div class="desk-wrapper">
        <div v-motion-slide-visible-once-left class="desk-date text-end">
          November 18, 2023
        </div>
        <div v-motion-pop-visible-once class="desk-num">
          <p></p>
          <div>2</div>
        </div>
        <div v-motion-slide-visible-once-right class="desk-details">
          <div class="desk-head">Teams Registration begins</div>
          <div class="desk-body">
            Interested teams can now show their interest in the getlinked tech
            hackathon 1.0 2023 by proceeding to register
          </div>
        </div>
      </div>

      <div class="desk-wrapper">
        <div v-motion-slide-visible-once-left class="desk-details text-end">
          <div class="desk-head">Teams Registration ends</div>
          <div class="desk-body">
            Interested Participants are no longer Allowed to register
          </div>
        </div>
        <div v-motion-pop-visible-once class="desk-num">
          <p></p>

          <div>3</div>
        </div>
        <div v-motion-slide-visible-once-right class="desk-date">
          November 18, 2023
        </div>
      </div>

      <div class="desk-wrapper">
        <div v-motion-slide-visible-once-left class="desk-date text-end">
          November 18, 2023
        </div>
        <div v-motion-pop-visible-once class="desk-num">
          <p></p>
          <div>4</div>
        </div>
        <div v-motion-slide-visible-once-right class="desk-details">
          <div class="desk-head">
            Announcement of the accepted teams and ideas
          </div>
          <div class="desk-body">
            All teams whom idea has been accepted into getlinked tech hackathon
            1.0 2023 are formally announced
          </div>
        </div>
      </div>

      <div class="desk-wrapper">
        <div v-motion-slide-visible-once-left class="desk-details text-end">
          <div class="desk-head">Getlinked Hackathon 1.0 Offically Begins</div>
          <div class="desk-body">
            Accepted teams can now proceed to build their ground breaking skill
            driven solutions
          </div>
        </div>
        <div v-motion-pop-visible-once class="desk-num">
          <p></p>
          <div>5</div>
        </div>
        <div v-motion-slide-visible-once-right class="desk-date">
          November 18, 2023
        </div>
      </div>

      <div class="desk-wrapper">
        <div v-motion-slide-visible-once-left class="desk-date text-end">
          November 18, 2023
        </div>
        <div v-motion-pop-visible-once class="desk-num">
          <p></p>
          <div>6</div>
        </div>
        <div v-motion-slide-visible-once-right class="desk-details">
          <div class="desk-head">Demo Day</div>
          <div class="desk-body">
            Teams get the opportunity to pitch their projects to judges. The
            winner of the hackathon will also be announced on this day
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "../assets/scss/timeline";
</style>
