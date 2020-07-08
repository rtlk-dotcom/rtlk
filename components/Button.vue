<template>
  <button
    :class="{'outlined': outlined}"
    :data-item-id="index"
    :data-item-price="produit.price"
    data-item-url="/"
    :data-item-description="'Not for human consumption.'"
    :data-item-name="$prismic.asText(produit.name)"
  >
    <img v-if="icon" :src="getImgUrl(icon)" :alt="icon">
    <span>{{ text }}</span>
  </button>
</template>
<script>
export default {
  props: ['icon', 'text', 'outlined', 'pdt', 'index'],
  name: 'button',
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
    &.outlined, &:hover
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
    &.outlined
      &:hover
        &:before
          opacity: 0
        span
          background: white
          -webkit-background-clip: text
          -webkit-text-fill-color: transparent
</style>
