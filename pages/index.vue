<template>
  <ul>
    <li v-for="(post, index) in allPosts" :key="index">
      <h1 class="title is-2">
        <nuxt-link :to="`/blog/${post.slug}`">
          {{post.title}}
        </nuxt-link>
      </h1>
      <div class="content is-size-5" v-html="$md.render(post.summary)"></div>
      <hr/>
    </li>
  </ul>
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    allPosts: gql`{
      allPosts{
        title
        summary
        slug
      }
    }`
  }
}
</script>
