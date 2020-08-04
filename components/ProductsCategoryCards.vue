<template>
  <div class="category category-card">
    <h1>{{ categorie.desc.name }}</h1>
    <p>{{ categorie.desc.desc }}</p>
    <div class="products">
      <span v-for="(product, index) in categorie.products" :key="product.id" :index="index">
        <a href="#" v-scroll-to="'#' + product.name">{{ product.name }}</a>
      </span>
    </div>
    <Btn v-scroll-to="'#' + categorie.desc.name" class="outlined" :text="'View selection'" />
  </div>
</template>

<script>
import Single from "~/components/Single.vue";
import Btn from "~/components/Btn.vue";

export default {
  props: ["categorie"],
  name: "category",
  components: {
    Single,
    Btn
  }
};
</script>

<style lang="sass">
.category.category-card
  width: calc(50% - 1em)
  padding: 5em 1.5em
  @include media("<tablet")
    padding: 1.5em 1.5em
    width: 100%
  box-sizing: border-box
  background: transparent
  position: relative
  &:hover
    color: white
    transition: color .25s
    h1
      color: white
      transition: color .25s
    &:after
      background: $bg
  &:before
    width: calc(100% - 4px)
    height: calc(100% - 4px)
    border: 2px solid #F4F4FA
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
  &:hover .products
    span a:after
      background: white
</style>
