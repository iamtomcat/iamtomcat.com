<template>
  <div>
    <blog-header/>
    <section class="section">
      <div class="container">
        <posts v-if="isHome"/>
        <Content v-else/>
      </div>
    </section>
    <blog-footer/>
  </div>
</template>

<script>
import BlogFooter from '../components/BlogFooter.vue'
import BlogHeader from '../components/BlogHeader.vue'
import Posts from '../components/Posts.vue'

export default {
  components: {
    BlogHeader,
    BlogFooter,
    Posts
  },
  computed: {
    isHome() {
      return this.$page.path === "/"
    }
  }
}
</script>

<style src="../styles/main.scss" lang="scss"></style>
