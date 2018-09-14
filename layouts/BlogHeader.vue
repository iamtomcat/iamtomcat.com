<template>
  <div class="container">
    <section class="hero">
        <!-- Hero head: will stick at the top -->
        <div class="hero-head">
          <nav class="navbar">
            <!-- <div class="container"> -->
              <div class="navbar-brand">
                <a href="/">
                  <h1 class="logo">iAmTomcat</h1>
                </a>
                <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" class="navbar-menu">
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
            <!-- </div> -->
          </nav>
        </div>
      </section>
    </div>
</template>
