<template>
  <section class="section">
    <h1 class="title is-1 has-text-centered">
    </h1>
    <h2 class="subtitle is-2 has-text-centered">
      Written By Tom -
    </h2>
    <div class="content is-size-4" v-html="content"></div>
  </section>
</template>

<script>
export default {
  data: () => ({
    content: ""
  }),
  async asyncData ({params}) {
    const fileContent = await import(`~/static/blog/${params.slug}.md`)
    console.log("filecontnet:",fileContent)
    return {
      content: fileContent.default
    }
  }
}
</script>
