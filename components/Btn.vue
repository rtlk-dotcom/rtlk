<template>
<no-ssr>
  <button
    :class="{'outlined': outlined, 'snipcart-add-item': index}"
    :data-item-id="index"
    :data-item-name="$prismic.asText(produit.name)"
    :data-item-description="produit.qty + 'x' + produit.dosage + 'mg. Not for human consumption.'"
    :data-item-price="produit.price"
    data-item-url="/"
  >
    <img v-if="icon" :src="getImgUrl(icon)" :alt="icon">
    <span>{{ text }}</span>
  </button>
</no-ssr>
</template>
<script>
export default {
  props: ['icon', 'text', 'outlined', 'pdt', 'index'],
  name: 'btn',
  data(){
    return{
      produit: ''
    }
  },
  beforeMount() {
    this.getPdt(this.pdt)
  },
  methods: {
    getImgUrl(icon) {
      var images = require.context('@/assets/img/icons/', false, /\.svg$/)
      return images('./' + icon + ".svg")
    },
    getPdt(pdt){
      if(pdt){
        this.produit = pdt
      }else
        this.produit =  []
      }
  }
}
</script>
<style lang="sass">
  button
    border-radius: 8px
    border: 0
    padding: 1em 1.75em
    font-family: inherit
    color: white
    font-weight: 600
    font-size: inherit
    transition: all .35s
    position: relative
    z-index: 2
    box-sizing: border-box
    outline: 0
    img
      height: 1em
      margin-right: .5em
    span
      color: white
    &:before
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      content: ''
      background: $bg
      z-index: -1
      border-radius: 8px
      transition: opacity .3s ease
    &:after
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      content: ''
      background: $bgReverse
      z-index: -2
      border-radius: 8px
      opacity: 1
      transition: opacity .5s ease
    &:hover
      cursor: pointer
      img
        filter: invert(20%) sepia(9%) saturate(3037%) hue-rotate(180deg) brightness(99%) contrast(104%)
    &.outlined, &:hover, &.snipcart__button--icon, &.snipcart-discount-box__cancel
      span
        background: $bg
        -webkit-background-clip: text
        -webkit-text-fill-color: transparent
      &:before
        border-radius: 6px
        background: white
        top: 2px
        left: 2px
        width: calc( 100% - 4px )
        height: calc( 100% - 4px )
    &.outlined, &.snipcart__button--icon, &.snipcart-discount-box__cancel
      &:hover
        color: white
        &:before
          opacity: 0
        span
          background: white
          -webkit-background-clip: text
          -webkit-text-fill-color: transparent
        svg
          filter: grayscale(1)
</style>
