<template>
  <section class="section">
    <h1 v-if="$apollo.loading" class="title is-1 has-text-centered">Loading...</h1>
    <div v-else>
        <h1 class="title is-1 has-text-centered">
        <nuxt-link :to="`/blog/${post.slug}`">
          {{post.title}}
        </nuxt-link>
      </h1>
      <h2 class="subtitle is-2 has-text-centered">
        Written By Tom - {{post.date}}
      </h2>
      <div class="content is-size-4" v-html="$md.render(post.body)"></div>
    </div>
  </section>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data() {
    return {
      post: {
        title: '',
        body: '',
        date: '',
        author: ''
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
          date
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
