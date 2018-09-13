<template>
  <section>
    <h1>{{post.title}}</h1>
    <div class="content" v-html="$md.render(post.body)"></div>
  </section>
</template>

<script>
import gql from 'graphql-tag'

export default {
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
      prefetch({route}) {
        return {
          slug: route.params.slug
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
