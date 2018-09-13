<template>
  <section>
    <nuxt-link :to="`/blog/${post.slug}`">
        <h1 class="title is-1 has-text-centered">{{post.title}}</h1>
    </nuxt-link>
    <div class="content" v-html="$md.render(post.body)"></div>
  </section>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  apollo: {
    post: {
      query: gql`query Post($slug: String!) {
        post(filter: {
          slug: {
            eq: $slug
          }
        }) {
          title
          body
        }
      }`,
      prefetch({params}) {
        return {
          slug: params.slug
        }
      },
      variables() {
        return {
          slug: this.$route.params.slug
        }
      }
    }
  }
}
</script>
