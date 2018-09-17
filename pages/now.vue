<template>
  <div>
    <h1 class="title is-1">
      What I'm doing now
    </h1>
    <div v-if="$apollo.loading"></div>
    <div v-else>
      <h2 class="subtitle is-3">
        Updated - {{now.edited}}
      </h2>
      <div class="content is-size-4" v-html="$md.render(now.body)"></div>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    now: gql`{
      now{
        body
        edited
      }
    }`
  },
}
</script>
