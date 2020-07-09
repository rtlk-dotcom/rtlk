<template>
  <div class="homepage">
    <header-prismic/>
    <nuxt />
    <!-- <footer-prismic/> -->
    <link rel="preconnect" href="https://app.snipcart.com">
    <link rel="preconnect" href="https://cdn.snipcart.com">
    <div id="snipcart" data-api-key="MDJjZDhiY2MtNTdlOS00OTdkLTgzZGEtNDA4NmQzZmRkNjM1NjM3Mjc4OTk3MzMzMDg2MTU0" hidden></div>
    <script src="https://cdn.snipcart.com/themes/v3.0.16/default/snipcart.js"></script>
  </div>
</template>

<script>
import HeaderPrismic from '~/components/HeaderPrismic.vue'
import FooterPrismic from '~/components/FooterPrismic.vue'

export default {
  components: {
    HeaderPrismic,
    FooterPrismic
  },
  head () {
    return {
      title: 'Ritalike',
    }
  },
  // Called before rendering the layout (even for error page)
  async middleware({ store, $prismic }) {
    await store.dispatch('fetchMenu', $prismic)
  }
}
</script>
