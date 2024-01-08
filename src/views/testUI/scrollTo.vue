<!-- App.vue -->

<template>
  <div>
    <div class="menu">
      <ul>
        <li
          v-scroll-to="'section1'"
          :class="{ selected: select === 'section1' }"
          @click="clickMenu('section1')"
        >
          Scroll to Section 1
        </li>
        <li
          v-scroll-to="'section2'"
          :class="{ selected: select === 'section2' }"
          @click="clickMenu('section2')"
        >
          Scroll to Section 2
        </li>
      </ul>
      <!-- <div v-scroll-to="'section1'">Scroll to Section 1</div> -->
      <!-- <button v-scroll-to="'section2'">Scroll to Section 2</button> -->
    </div>

    <div style="height: 60px">hhhhhhhhhhhhhhh</div>

    <div id="section1" class="section">
      <h2>Section 1</h2>
      <p>This is the content of Section 1.</p>
    </div>

    <div id="section2" class="section">
      <h2>Section 2</h2>
      <p>This is the content of Section 2.</p>
      <p>This is the content of Section 2.</p>
      <p>This is the content of Section 2.</p>
      <p>This is the content of Section 2.</p>
      <p>This is the content of Section 2.</p>
      <p>This is the content of Section 2.</p>
      <p>This is the content of Section 2.</p>
      <p>This is the content of Section 2.</p>
      <p>This is the content of Section 2.</p>
      <p>This is the content of Section 2.</p>
      <p>This is the content of Section 2.</p>
      <p>This is the content of Section 2.</p>
      <p>This is the content of Section 2.</p>
      <p>This is the content of Section 2.</p>
      <p>This is the content of Section 2.</p>
      <p>This is the content of Section 2.</p>
      <p>This is the content of Section 2.</p>
      <p>This is the content of Section 2.</p>
      <p>This is the content of Section 2.</p>
      <p>This is the content of Section 2.</p>
      <p>This is the content of Section 2.</p>
    </div>
    <div id="section3" class="section"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const select = ref('');

const clickMenu = (value: string) => {
  select.value = value;
};
</script>

<style>
.section {
  margin-top: 500px; /* Add some space to make scrolling noticeable */
}
.menu {
  position: fixed;
  top: 20px;
  right: 0;
  height: 60px;
}

ul li {
  height: 40px;
  cursor: pointer;
}

.selected {
  color: #123ee3;
}
</style>
