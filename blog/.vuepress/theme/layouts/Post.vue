<template>
  <div>
    <blog-header/>
    <section class="section">
      <div class="container content">
        <Content/>
      </div>
    </section>
    <blog-footer/>
  </div>
</template>

<script>
import BlogFooter from '../components/BlogFooter.vue'
import BlogHeader from '../components/BlogHeader.vue'

export default {
  components: {
    BlogHeader,
    BlogFooter
  }
}
</script>

<style src="../styles/main.scss" lang="scss"></style>