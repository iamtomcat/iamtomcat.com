<template>
  <div>
    <blog-header/>
    <section class="section">
      <div class="container">
        <nuxt/>
      </div>
    </section>
    <blog-footer/>
  </div>
</template>

<script>
import BlogFooter from '~/layouts/BlogFooter.vue'
import BlogHeader from '~/layouts/BlogHeader.vue'

export default {
  components: {
    BlogHeader,
    BlogFooter
  }
}
</script>
