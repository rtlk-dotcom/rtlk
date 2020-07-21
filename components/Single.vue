<template>
  <article>
    <div class="main-line" @click="shown = !shown">
      <div class="product-title">
        <h1>***</h1>
        <h2>***</h2>
      </div>
      <!-- {{ slice.link_wikipedia}}
      {{ slice.link_thirdwave}} -->
      <div class="links">
        <prismic-link v-if="slice.link_wikipedia.url" :field="slice.link_wikipedia" class="link">
          <Btn class="outlined circle" :icon="'wikipedia'" />
        </prismic-link>
        <prismic-link v-if="slice.link_thirdwave.url" :field="slice.link_thirdwave" class="link">
          <Btn class="outlined circle" :icon="'wave'" />
        </prismic-link>
      </div>
      <span class="dosage">{{ slice.dosage}}**</span>
      <span class="qty">x{{ slice.qty}}</span>
      <span class="price">{{ slice.price}}€</span>
      <div class="buttons">
        <!-- <Btn :text="'Subscribe'" :outlined="true" /> -->
        <BtnShop :text="'Add to Cart'" :icon="'cart'" :pdt="slice.primary" :index="index" />
      </div>
    </div>
    <div class="more-content" v-show="shown">
      <div class="desc">
        {{ $prismic.asText(slice.desc) }}
        <!-- <p><strong>{{ $prismic.asText(slice.name) }} is not for human consumption</strong></p> -->
      </div>
      <prismic-image :field="slice.molecule"/>
    </div>
  </article>
</template>

<script>
import BtnShop from '@/components/BtnShop.vue'

export default {
  props: ['slice', 'index'],
  name: 'single',
  components:{
    BtnShop
  },
  data(){
    return {
      shown: false
    }
  }
}
</script>

<style lang="sass" scoped>
  article
    display: flex
    flex-direction: column
    cursor: pointer
    &:hover
      transition: background .25s
      background: rgba(#FFFFFF, .95)
  .main-line
    display: flex
    align-items: center
    justify-content: space-between
    .product-title
      display: flex
      align-items: center
    h1, h2
      font-family: inherit
      font-weight: 700
      font-size: 15px
      margin: 0 1em 0 .5em
      white-space: nowrap
      width: 5em
    h2
      font-weight: 500
      color: #C5C5C5
      width: 7em
    .links
      display: flex
      width: 5.5em
      justify-content: center
      a.link
        border-radius: 50%
        height: 35px
        width: 35px
        color: #C5C5C5
        display: flex
        align-items: center
        justify-content: center
        img
          height: 1.1em
        &:after
          display: none
        &:not(:last-child)
          margin-right: 1em
    .dosage
      font-weight: 600
    .qty
      color: #3ECF8E
  .more-content
    border: 2px solid #F4F4FA
    border-radius: .5em
    margin-top: 1em
    padding: 2em 1em
    display: flex
    justify-content: space-between
    .desc
      max-width: 66%
    img
      width: 150px


</style>
