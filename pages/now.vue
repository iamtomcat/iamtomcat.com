<template>
  <div class="content is-size-4" v-html="$md.render(nowPage)"></div>
</template>

<script>
export default {
  data() {
    return {
      nowPage: ""
    }
  },
  mounted: function() {
    this.$axios.get(`/now.md`)
    .then((res) => {
      this.nowPage = res.data
    })
  },
}
</script>
