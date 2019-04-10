const feed_options = {
  canonical_base: 'https://www.iamtomcat.com',
};

module.exports = {
  title: "iAmTomcat",
  description: "Blog about development and ideas.",
  dest: "./dist",
  plugins: [
    '@vuepress/blog',
    ['feed', feed_options]
  ],
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
}