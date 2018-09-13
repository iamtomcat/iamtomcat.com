<template>
  <section class="hero">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <nuxt-link class="navbar-item" :to="`/`">
                <h1 class="title is-1">iAmTomcat</h1>
              </nuxt-link>
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
                <nuxt-link class="navbar-item" to="/about">About</nuxt-link>
                <a class="navbar-item" href="https://www.github.com/iamtomcat">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </section>
</template>
