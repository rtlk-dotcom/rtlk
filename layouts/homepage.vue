<template>
  <div class="homepage">
    <header-prismic/>
    <nuxt />
    <!-- <footer-prismic/> -->
    <div id="snipcart" data-api-key="MDJjZDhiY2MtNTdlOS00OTdkLTgzZGEtNDA4NmQzZmRkNjM1NjM3Mjc4OTk3MzMzMDg2MTU0" hidden></div>
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
