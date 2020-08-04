<template>
  <article>
    <div class="main-line">
      <div class="product-title">
        <h1>***</h1>
        <h2>***</h2>
      </div>
      <!-- {{ product.link_wikipedia}}
      {{ product.link_thirdwave}}-->
      <div class="links">
        <a v-if="product.wiki" :href="product.wiki" class="link" target="_blank">
          <Btn class="outlined circle" :icon="'wikipedia'" />
        </a>
        <a v-if="product.thirdwave" :href="product.thirdwave" class="link" target="_blank">
          <Btn class="outlined circle" :icon="'wave'" />
        </a>
      </div>
      <span class="dosage">{{ product.dosage}}</span>
      <span class="qty">x{{ product.qty}}</span>
      <span class="price">{{ product.price}}€</span>
      <div class="read-more" @click="shown = !shown">
        <span class="link">About {{ product.name }}</span>
        <span :class="[{'shown': shown}, 'arrow']">⌃</span>
      </div>
      <div class="buttons">
        <!-- <Btn :text="'Subscribe'" :outlined="true" /> -->
        <BtnShop :text="'Add to Cart'" :icon="'cart'" :pdt="product" :index="index" />
      </div>
    </div>
    <div class="more-content" v-show="shown">
      <div class="desc">
        {{ product.desc }}
        <!-- <p><strong>{{ $prismic.asText(product.name) }} is not for human consumption</strong></p> -->
      </div>
      <!-- <prismic-image :field="product.molecule" /> -->
    </div>
  </article>
</template>

<script>
import BtnShop from "@/components/BtnShop.vue";
import Btn from "@/components/Btn.vue";

export default {
  props: ["product", "index"],
  name: "single",
  components: {
    BtnShop,
    Btn,
  },
  data() {
    return {
      shown: false,
    };
  },
};
</script>

<style lang="sass" scoped>
article
  display: flex
  flex-direction: column
  &:hover
    transition: background .25s
    background: rgba(#FFFFFF, .95)
  .main-line
    display: flex
    align-items: center
    justify-content: space-between
    position: relative
    @include media("<tablet")
      flex-wrap: wrap
    .product-title
      display: flex
      align-items: center
      @include media("<tablet")
        min-width: 100%
        flex-direction: column
        align-items: flex-start
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
      @include media("<tablet")
        min-width: 100%
        flex: 1
        margin: 1em 0
        justify-content: flex-end
        position: absolute
        top: -1em
        right: 0
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
    .read-more
      min-width: 9em
      display: flex
      justify-content: flex-end
      align-items: center
      cursor: pointer
      .link
        font-size: .785em
      .arrow
        transform: rotate(180deg)
        transition: transform .2s
        margin-left: .5em
        &.shown
          transform: rotate(270deg)
  .buttons
    @include media("<tablet")
      flex: 1
      min-width: 100%
      margin-top: 1em
  button
    @include media("<tablet")
      min-width: 100%

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
