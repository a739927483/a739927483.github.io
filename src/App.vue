<template>
  <div class="root">
    <header class="header">
      <div class="brand">
        <div class="logo" aria-hidden="true">Logo</div>
        <div class="brand-text">
          <div class="brand-title">{{ state.name }}</div>
          <div class="brand-sub">LIGHT*WAVE*BIU*BIU*BIU*</div>
        </div>
      </div>
    </header>

    <main class="layout">
      <section class="left">
      </section>

      <aside class="right">
      </aside>
    </main>

    <footer class="footer">
      <div class="footer-left">© {{ year }} {{ state.name }}. All rights reserved.</div>
    </footer>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'

export default {
  name: 'App',
  setup() {
    const state = reactive({
      name: '抓娃娃小队长',
    })

    const year = computed(() => new Date().getFullYear())

    return { state, year }
  },
}
</script>

<style>
@import './assets/app.css';
</style>

