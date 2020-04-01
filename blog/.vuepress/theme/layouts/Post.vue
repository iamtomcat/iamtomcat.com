<template>
  <div>
    <blog-header/>
    <section class="section">
      <div class="container content">
        <h1><a :href=$page.path>{{ $frontmatter.title }}</a></h1>
        <h2>{{ $frontmatter.date }}</h2>
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