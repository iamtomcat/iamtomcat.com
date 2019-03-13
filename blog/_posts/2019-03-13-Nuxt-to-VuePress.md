---
title: Nuxt to VuePress
date: 2019-03-13
description: Why I moved from Nuxt.js to VuePress and the journey into a custom theme.
tags:
  [vue, javascript]
---

# Switching from Nuxt to VuePress

After putting off writing anything, I decided to have another look at creating a blog for myself. I started by looking at what Mattt from [NSHipster](http://www.nshipster.com) was doing with jekyll and I discovered front matter. Nuxt did not have support for this out of the box and I happened to come across VuePress and noticed that it had the metadata support that I wanted and you can still make calls from vue inside your markdown if you wanted to.

The biggest difference is how much simpler VuePress is. It's more akin to gitbook where you would just run your command in the root with all your markdown files and it'd spit out a site. Both static site generators have a config file that give your project a shape. The default for vuepress is to be used as a documentation site vs nuxt wants you to try and create a Single Page Application or render it server side. The handling of markdown is the biggest difference between the two. VuePress makes markdown a first class citizen and allows for front matter data. Where as with nuxt you'd have to create a custom parser to be able to get this information out before being presented. Having that metadata as part of the file makes it more searchable and more useful as a medium in the long run.

I had originally started down this road because I was interested in a headless cms and wanted to use nuxt to update the site remotely. But I also got interested in site that are minimalist and don't have much for the user to laod for when they are on a slow connection the likelihood of your site being loaded is quite high.

To build the blog all you have to is run.

```bash
vuepress build blog
```

However you can alias this to `npm run`.

```bash
npm run build
```
