<template>
  <div class="container">
    <section class="hero">
        <!-- Hero head: will stick at the top -->
        <div class="hero-head">
          <nav class="navbar">
              <div class="navbar-brand">
                <a href="/">
                  <h1 class="logo has-text-centered">iAmTomcat</h1>
                </a>
                <span class="navbar-burger burger" data-target="navbarMenuHeroA" v-on:click="showNav = !showNav" v-bind:class="{ 'is-active': showNav }">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" class="navbar-menu" v-bind:class="{ 'is-active': showNav }">
                <div class="navbar-end">
                  <nuxt-link class="navbar-item" :to="`/`">
                    Home
                  </nuxt-link>
                  <nuxt-link class="navbar-item" :to="`/now`">
                    Now
                  </nuxt-link>
                  <!-- <nuxt-link class="navbar-item" to="/about">About</nuxt-link> -->
                  <a class="navbar-item" href="https://www.github.com/iamtomcat">
                    GitHub
                  </a>
                </div>
              </div>
          </nav>
        </div>
      </section>
    </div>
</template>

<script>
export default {
  data() {
    return {
      showNav: false
    }
  }
}
</script>

