<template>
  <section>
    <!-- Banner component -->
    <homepage-banner :banner="banner" :categories="categories" />
    <!-- Slices block component -->
    <!-- <slices-block :slices="slices"/> -->
    <!-- <section class="slice cards-category-slice slice-gradient">
      <ProductsCategoryCards
        v-for="(cat, index) in categories"
        :key="cat"
        :card="slices[0].items[index]"
        :index="index"
        :slices="slices"
        :name="cat"
      />
    </section>-->
    <section
      v-for="cat in categories"
      :key="cat.id"
      class="slice categories"
    >
      <div class="intro">
        <div class="title">
          <!-- <h1>{{ cat }} ***{{ $prismic.asText(slices[0].items[index].suffix)}}</h1> -->
          <h1>{{ cat.desc.name }}</h1>
          <h2>{{ cat.desc.desc }}</h2>
        </div>
        <!-- <p v-if="slices[0].items[index].wiki_link.url"> Learn more about *** on <a :href="slices[0].items[index].wiki_link.url">the Third Wave</a></p> -->
        <!-- <p v-if="slices[0].items[index].wiki_link.url">
          Learn more about *** on
          <a href="#">the *** ***</a>
        </p>-->
      </div>
      <section class="packs">
        <Category :products="cat.products" />
      </section>
    </section>
  </section>
</template>

<script>
// Imports for all components
import HomepageBanner from "~/components/HomepageBanner.vue";
import SlicesBlock from "~/components/SlicesBlock.vue";
import Category from "~/components/Category.vue";
import ProductsCategoryCards from "~/components/ProductsCategoryCards.vue";

export default {
  name: "Home",
  layout: "homepage",
  components: {
    HomepageBanner,
    SlicesBlock,
    Category,
    ProductsCategoryCards
  },
  data() {
    return {
      categories: {
        ritalike: {
          desc: {
            name: "Ritalike",
            desc: "Methylphenidate analogue"
          },
          products: {
            fluoro: {
              id: "101",
              name: "4F-MPH",
              full: "4Fluoro-Methylphenidate",
              dosage: "15mg",
              qty: "30",
              price: "45",
              desc: "Not for human consumption"
            },
            ippd: {
              id: "002",
              name: "IPPD",
              full: "Isopropylphenidate",
              dosage: "30mg",
              qty: "30",
              price: "45",
              desc: "Not for human consumption"
            }
          }
        },
        lysergic: {
          desc: {
            name: "Lysergic",
            desc: "LSD analogue"
          },
          products: {
            plsd: {
              id: "201",
              name: "1P-LSD",
              full: "1P-LSD",
              dosage: "15µmg",
              qty: "25",
              price: "45",
              desc: "Not for human consumption"
            },
            dplsd: {
              id: "202",
              name: "1dP-LSD",
              full: "1dP-LSD",
              dosage: "15µmg",
              qty: "25",
              price: "45",
              desc: "Not for human consumption"
            }
          }
        }
      }
    };
  },
  head() {
    return {
      title: "Ritalike"
    };
  },
  async asyncData({ $prismic, error }) {
    try {
      // Query to get the home page content
      const homepage = (await $prismic.api.getSingle("homepage")).data;

      return {
        // Page content
        banner: homepage.homepage_banner[0],
        // Set slices as variable
        slices: homepage.page_content
      };
    } catch (e) {
      error({ statusCode: 404, message: "Page not found" });
    }
  }
};
</script>
<style lang="sass">
.site-header
  z-index: 9999
  position: relative
  section
    h1
      text-transform: uppercase
      font-size: 19px
      font-weight: 700
      letter-spacing: .175em
      margin-right: .25em
    h2
      color: inherit
      font-size: 19px
      font-weight: 300
    a
      background: $bg
      -webkit-background-clip: text
      -webkit-text-fill-color: transparent
      font-weight: 700
      font-size: inherit
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
  padding: 2em 0
  &.slice-gradient
    z-index: 1
    position: relative
    margin-top: -80px
    padding: 0 calc(50% - 520px) 50px
    &:before
      @include pseudo
      display: none
      background: linear-gradient(183.92deg, rgba(255, 255, 255, 0) -21.08%, #FFFFFF 90.05%), linear-gradient(105.58deg, #80D8FF -28.42%, #EA80FC 178.03%), #C4C4C4
      opacity: .2
      z-index: -3
  &.categories:hover
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
