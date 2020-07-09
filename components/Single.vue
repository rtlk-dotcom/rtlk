<template>
  <article>
    <div class="product-title">
      <h1>{{ $prismic.asText(slice.primary.name) }}</h1>
      <h2>{{ $prismic.asText(slice.primary.full_name) }}</h2>
    </div>
    <!-- {{ slice.primary.link_wikipedia}}
    {{ slice.primary.link_thirdwave}} -->
    <div class="links">
      <span class="link"></span>
      <span class="link"></span>
    </div>
    <span class="dosage">{{ slice.primary.dosage}}mg</span>
    <span class="qty">x{{ slice.primary.qty}}</span>
    <span class="price">{{ slice.primary.price}}€</span>
    <div class="buttons">
      <Btn :text="'Subscribe'" :outlined="true" />
      <Btn :text="'Add to Cart'" :icon="'cart'" :pdt="slice.primary" :index="index"
       />
    </div>

  </article>
</template>

<script>
import Btn from '@/components/Btn.vue'

export default {
  props: ['slice', 'index'],
  name: 'single',
  components:{
    Btn
  }
}
</script>

<style lang="sass" scoped>
  article
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
      span.link
        border-radius: 50%
        height: 35px
        width: 35px
        background: #F4F4FA
        color: #C5C5C5
        &:not(:last-child)
          margin-right: 1em
    .dosage
      font-weight: 600
    .qty
      color: #3ECF8E


</style>
