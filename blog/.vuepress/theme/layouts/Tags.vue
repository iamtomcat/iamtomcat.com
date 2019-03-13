<template>
  <div>
    <blog-header/>
    <section class="section">
      <div class="container theme-container">
        <ul>
          <li v-for="tag in Object.keys($tags._metaMap)">
            <router-link :to="$tags._metaMap[tag].path">
              {{ tag }} {{ $tags._metaMap[tag].posts.length }}
            </router-link>
          </li>
        </ul>
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