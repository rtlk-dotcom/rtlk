<template>
  <section>
    <!-- Banner component -->
    <homepage-banner :banner="banner" :categories="categories"/>
    <!-- Slices block component -->
    <!-- <slices-block :slices="slices"/> -->
    <section v-for="cat in categories" :key="cat" class="slice">
      <div class="intro">
        <div class="title">
          <h1>Ritalike Selection</h1>
          <h2>Methylphenidate analogue pellets</h2>
        </div>
        <p>Learn more about mircrodosing on <a href="#">the Third Wave</a></p>
      </div>
      <section class="packs">
        <Category :slices="slices" :name="cat"/>
      </section>
    </section>
  </section>
</template>

<script>
// Imports for all components
import HomepageBanner from '~/components/HomepageBanner.vue'
import SlicesBlock from '~/components/SlicesBlock.vue'
import Category from '~/components/Category.vue'

export default {
  name: 'Home',
  layout: 'homepage',
  components: {
    HomepageBanner,
    SlicesBlock,
    Category
  },
  data(){
    return{
      categories: ['ritalike', 'lysergic', 'modalike']
    }
  },
  head () {
    return {
      title: 'Prismic Nuxt.js Multi Page Website',
    }
  },
  async asyncData({ $prismic, error }) {
    try{
      // Query to get the home page content
      const homepage = (await $prismic.api.getSingle('homepage')).data

      return {
        // Page content
        banner: homepage.homepage_banner[0],
        // Set slices as variable
        slices: homepage.page_content
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>
<style lang="sass">
  section
    h1
      text-transform: uppercase
      font-size: 21px
      font-weight: 600
      letter-spacing: .175em
    h2
      color: inherit
      font-size: 18px
      font-weight: 400
    a
      background: $bg
      -webkit-background-clip: text
      -webkit-text-fill-color: transparent
      font-weight: 700
      font-size: inherit
      text-decoration: underline
      position: relative
      &:after
        position: absolute
        bottom: -3px
        height: 1px
        width: 100%
        right: 0
        content: ''
        background: $bg
        transition: .3s
      &:hover
        &:after
          width: 10%
  section.slice
    width: 1040px
    margin: auto
    padding: 3em 0
    &:hover
      .category
        background: $bg
        box-shadow: $shadow
    .intro, .title
      *
        margin-bottom: 0
        line-height: 100%
      display: flex
      align-items: flex-end
    .intro
      justify-content: space-between
      margin-bottom: 2em
  .buttons
    display: flex
    align-items: center
    button
      &:not(:last-child)
        margin-right: .5em
</style>
