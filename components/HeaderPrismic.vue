<template>
  <header class="site-header">
    <p
      v-if="$store.state.menu === 'Please create a menu document'"
      class="logo"
    >
    </p>
    <nuxt-link to="/" class="logo">
      <prismic-image :field="$store.state.menu.logo" />
      {{ $prismic.asText($store.state.menu.title) }}
    </nuxt-link>
    <!-- <nav>
      <ul>
        <li v-for="menuLink in $store.state.menu.menu_links" :key="menuLink.id">
          <a
            href="#"
            v-scroll-to="{
              el: '#' + $prismic.asText(menuLink.label)
            }">
            {{ $prismic.asText(menuLink.label) }}
          </a>
        </li>
      </ul>
    </nav> -->
    <Btn :text="'Checkout'" checkout="true" :outlined="true"/>
  </header>
</template>

<script>
import Btn from '@/components/Btn.vue'
export default {
  name: "header-prismic",
  components: {
    Btn
  }
};
</script>

<style lang="sass">
.site-header
  padding: 20px 0
  font-weight: 700
  display: flex
  align-items: center
  a
    font-weight: 500
  .logo
    display: flex
    align-items: center
    font-size: 22px
    font-weight: 900
    img
      width: 36px
      margin-right: .5em
  nav
    float: right
    ul
      margin: 0
      padding-left: 0
    li
      display: inline-block
      margin-left: 40px
  button
    margin-left: auto
@media (max-width: 1060px)
  .site-header
    padding-left: 20px
    padding-right: 20px

@media (max-width: 767px)
  .site-header
    height: auto

  .homepage .site-header
    position: absolute
    left: 0
    right: 0

  .site-header
    .logo
      display: block
      text-align: center
    nav
      float: none
      text-align: center
      li
        display: inline-block
        margin-left: 10px
        margin-right: 10px
</style>


