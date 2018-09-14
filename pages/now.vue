<template>
  <div class="content is-size-4" v-html="$md.render(nowPage)"></div>
</template>

<script>
export default {
  asyncData ({ app }) {
    return app.$axios.get(`http://localhost:3000/now.md`)
    .then((res) => {
      return { nowPage: res.data }
    })
  }
}
</script>
