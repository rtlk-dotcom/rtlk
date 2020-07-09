<template>
  <div class="category">
    <Single v-for="(slice, index) in slices"
    :key="slice.id"
    v-if="slice.primary.category === name"
    :slice="slice" :index="index" class="single"/>
  </div>
</template>

<script>
import Single from '~/components/Single.vue';

export default {
  props: ['slices', 'name'],
  name: 'category',
  components:{
    Single
  }
}
</script>

<style lang="sass">
.category
  background: #F4F4FA
  border-radius: 16px
  display: flex
  flex-direction: column
  margin-bottom: 3em
  padding: 1em
  box-shadow: 0px 0px 0px rgba(black, 0)
  transition: all .35s
  &:hover
    background: $bg
    box-shadow: $shadow
    a
      background: transparent
      color: white
      -webkit-background-clip: text
      -webkit-text-fill-color: initial
      &:after
        background: white
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
  .category-card
    width: calc(33% - 3em)
</style>
