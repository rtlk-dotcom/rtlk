<template>
    <section class="homepage-banner">
    <!-- <section class="homepage-banner" :style="{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(' + banner.image.url + ')' }"> -->
      <!-- Template for page title. -->
      <!-- <video width="320" height="240" autoplay loop>
        <source src="~/assets/img/waves.webm" type="video/webm">
        <source src="movie.ogg" type="video/ogg">
      Your browser does not support the video tag.
      </video> -->
      <div class="banner-content container">
        <!-- Template for page tagline. -->
        <prismic-rich-text :field="banner.tagline" class="tagline"/>
        <prismic-link class="button" :field="banner.button_link">
          {{ $prismic.asText(banner.button_label) }}
        </prismic-link>
      </div>
    </section>
</template>

<script>
export default {
  props: ['banner'],
  name: 'homepage-banner',
}
</script>

<style lang="sass" scoped>
.homepage-banner
  margin: -70px 0 80px
  padding: 10em 0 8em
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
  text-align: center

.tagline
  font-size: 1.75em
  line-height: 135%

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
