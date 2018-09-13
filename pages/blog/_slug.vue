<template>
  <section>
    <h2 class="title is-2 has-text-centered">
      <nuxt-link :to="`/blog/${post.slug}`">
        {{post.title}}
      </nuxt-link>
    </h2>
    <div class="content is-size-5" v-html="$md.render(post.body)"></div>
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
