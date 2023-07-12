<template>
  <div class="mylib-nav">
    <p class="home" @click="$router.push('/')">
      <mylib-icon name="home" size="lg" />
    </p>
    <p class="name">Charts</p>
    <p class="name-zh"><del>组件中文名称</del></p>
  </div>
  <div class="mylib-example charts">
    <section
      v-for="(demo, index) in demos"
      :key="index"
      class="mylib-example-section"
    >
      <div
        class="mylib-example-title"
        v-text="demo.title"
      />
      <div
        class="mylib-example-describe"
        v-text="demo.describe"
      />
      <div class="mylib-example-content">
        <component :is="demo" />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { createDemoModule } from '../../utils/index'
const demos = import.meta.globEager('./demo*.vue')

export default createDemoModule(
  'Charts',
  Object.entries(demos).map((demo) => demo[1].default)
)
</script>

<style lang="stylus"></style>
