<template>
  <section class="section">
                <div class="container">

    <div class="columns is-centered">
      <div class="column is-two-thirds">
             <ul>
        <li v-for="(post, index) in posts" :key="index">
          <h1 class="title is-2">
            <nuxt-link :to="`/blog/${post.title}`">
              {{post.title}}
            </nuxt-link>
          </h1>
          <div class="content" v-html="$md.render(post.body)"></div>
        </li>
      </ul>
      </div>
    </div>
                </div>

  </section>
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    posts: gql`{
      posts{
        title
        body
      }
    }`
  }
}
</script>
