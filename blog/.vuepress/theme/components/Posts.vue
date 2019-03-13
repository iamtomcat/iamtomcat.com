<template>
  <div class="posts content" v-if="posts.length">
     <div class="post" v-for="post in posts">
        <router-link :to="post.path">
          <h2>{{post.frontmatter.title}}</h2>
        </router-link>
        <p>{{post.frontmatter.description}}</p>
        <router-link :to="post.path">
          <h3>Read More</h3>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    posts() {
      return this.$site.pages
      .filter(item => item.type === 'post')
      .sort((a, b) => {
        return new Date(b.frontmatter.date || b.lastUpdated) - new Date(a.frontmatter.date || a.lastUpdated)
      })
    }
  }
}
</script>
