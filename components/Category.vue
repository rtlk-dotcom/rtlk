<template>
  <div class="category">
    <Single
      v-for="(product, index) in products"
      :key="product.id"
      :product="product"
      :index="index"
      class="single"
    />
  </div>
</template>

<script>
import Single from "~/components/Single.vue";
export default {
  props: ["products"],
  name: "category",
  components: {
    Single
  }
};
</script>

<style lang="sass">
.category
  border-radius: 16px
  display: flex
  flex-direction: column
  margin-bottom: 3em
  padding: 1em
  box-shadow: 0px 0px 0px rgba(black, 0)
  transition: all .35s
  position: relative
  z-index: 1
  @include media("<tablet")
    max-width: 100%
  &:before
    @include pseudo
    background: #F4F4FA
    border-radius: 1em
    z-index: -2
  &:after
    @include pseudo
    background: $bg
    opacity: 0
    transition: opacity .3s
    border-radius: 1em
    z-index: -2
  &:hover
    background: $bg
    box-shadow: $shadow
    a
      background: transparent
      color: white
      -webkit-background-clip: text
      -webkit-text-fill-color: initial
    &:after
      opacity: 1
  .single
    background: white
    border-radius: 8px
    padding: .5em
    &:not(:last-child)
      margin-bottom: 1em
.cards-category-slice
  display: flex
  flex-direction: row
  justify-content: space-between
</style>
