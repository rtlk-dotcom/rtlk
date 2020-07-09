<template>
  <div class="category category-card">
    <h1>{{ name }} {{ $prismic.asText(card.suffix) }}</h1>
    <p>{{ $prismic.asText(card.desc) }}</p>
    <div class="products">
      <span v-for="(slice, index) in slices"
        :key="slice.id"
        v-if="slice.primary.category === name"
        :index="index">
        <a href="#" v-scroll-to="'#' + name">{{ $prismic.asText(slice.primary.name) }}</a>
      </span>
    </div>
    <Btn v-scroll-to="'#' + name" class="outlined" :text="'View selection'"/>
  </div>
</template>

<script>
import Single from '~/components/Single.vue';
import Btn from '~/components/Btn.vue';

export default {
  props: ['card', 'name', 'slices'],
  name: 'category',
  components:{
    Single,
    Btn
  }
}
</script>

<style lang="sass">
.category.category-card
  width: calc(33% - 1em)
  padding: 5em 1.5em
  box-sizing: border-box
  background: transparent
  position: relative
  &:hover
    background: $bg
    color: white
    transition: color .25s
    h1
      color: white
      transition: color .25s
  &:after
    position: absolute
    content: ''
    top: 0
    left: 0 
    width: calc(100% - 4px)
    height: calc(100% - 4px)
    border-radius: 1em
    border: 2px solid #F4F4FA
    z-index: -1
    background: white
  h1
    font-size: 2em
    line-height: 110%
    font-weight: 700
  .outlined
    margin-top: auto
    align-self: center
  .products
    display: flex
    flex-direction: column
    margin-bottom: 2em
</style>
