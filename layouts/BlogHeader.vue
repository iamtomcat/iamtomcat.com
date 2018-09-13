<template>
  <section class="hero">
      <!-- Hero head: will stick at the top -->
      <div class="hero-head">
        <nav class="navbar">
          <div class="container">
            <div class="navbar-brand">
              <a class="navbar-item" href="/">
                <h1 class="title">iAmTomcat</h1>
                <!-- <img src="https://bulma.io/images/bulma-type-white.png" alt="Logo"> -->
              </a>
              <span class="navbar-burger burger" data-target="navbarMenuHeroA">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </div>
            <div id="navbarMenuHeroA" class="navbar-menu">
              <div class="navbar-end">
                <a class="navbar-item is-active" href="/">
                  Home
                </a>
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
