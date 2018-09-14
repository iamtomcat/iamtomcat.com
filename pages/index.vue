<template>
  <div>
    <tag-line/>
    <ul>
      <li v-for="(post, index) in allPosts" :key="index">
        <h1 class="title is-1">
          <nuxt-link :to="`/blog/${post.slug}`">
            {{post.title}}
          </nuxt-link>
        </h1>
        <div class="content is-size-4" v-html="$md.render(post.summary)"></div>
        <hr/>
      </li>
    </ul>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import TagLine from '~/layouts/TagLine.vue'

export default {
  apollo: {
    allPosts: gql`{
      allPosts{
        title
        summary
        slug
      }
    }`
  },
  components: {
    TagLine
  }
}
</script>
