<template>
    <section class="homepage-banner">
    <!-- <section class="homepage-banner" :style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(' + banner.image.url + ')' }"> -->
      <!-- Template for page title. -->
      <client-only>
        <video width="320" height="240" ref="bg-video" id="vid" autoplay loop>
          <source src="~/assets/img/waves.webm" type="video/webm">
        Your browser does not support the video tag.
        </video>
      </client-only>
      <div class="banner-content container">
        <!-- Template for page tagline. -->
        <prismic-rich-text :field="banner.tagline" class="tagline"/>
        <p>
          We offer different *** for *********** (branded as *********®),
          *** and ******* <br />
        </p>
        <Btn v-scroll-to="{el: '#ritalike'}" :text="$prismic.asText(banner.button_label) " />
      </div>
    </section>
</template>

<script>
import Btn from './Btn.vue'
export default {
  props: ['banner'],
  name: 'homepage-banner',
  components: {
    Btn
  },
  ready(){
    if(process.static){
      this.$refs.inputName("bg-video").play()
    }
  }
}
</script>

<style lang="sass">
.homepage-banner
  margin: -70px 0 0px
  padding: 10em 0 10em
  background-position: center center
  background-size: cover
  line-height: 1.75
  text-align: center
  position: relative
  overflow: hidden
  width: 100%
  video
    position: absolute
    object-fit: cover
    z-index: -1
    bottom: -5em
    left: 0
    width: 100%
    height: 100%
  &:before
    position: absolute
    content: ''
    bottom: 0
    left: 0
    height: 1px
    width: 100%
    background: $bg

.banner-content
  display: flex
  flex-direction: column
  justify-content: flex-start
  align-items: flex-start
  @include media("<tablet")
    padding: 0 .5em
  >p
    text-align: left
    max-width: 720px
    font-weight: 500
    margin-top: 1em
  button
    margin-top: 2em

.tagline
  font-size: 1.75em
  line-height: 135%
  text-align: left
  width: 720px
  max-width: 100%
  p
    margin-bottom: 0
    font-size: 2.2em
    @include media("<tablet")
      font-size: 1.5em
    line-height: 100%
    font-family: 'Söhne Test', sans-serif
    font-weight: 600
    strong
      opacity: .5
.banner-title, .banner-description
  width: 90%
  max-width: 490px
  margin-left: auto
  margin-right: auto

.banner-title
  font-size: 70px
  font-weight: 900
  line-height: 70px

@media (max-width: 767px)
  .homepage-banner
    margin: 0 0 40px
    padding: 10em 0 6em
  .banner-title
    font-size: 50px
    line-height: 50px
</style>
