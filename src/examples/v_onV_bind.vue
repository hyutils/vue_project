<template>
  <div>
    <!-- 传递事件参数 -->
    <input v-on:input="handleInput($event)" />

    <!-- 使用修饰符.prevent 阻止默认行为 -->
    <form v-on:submit.prevent="handleSubmit">Submit Form</form>

    <!-- 使用修饰符.stop 阻止事件冒泡 -->
    <div v-on:click.stop="handleClick">Click me</div>
  </div>
</template>

<script lang="ts" setup>
const handleInput = (event: any) => {
  console.log('Input value:', event.target.value);
};
const handleSubmit = () => {
  console.log('Form submitted');
};
const handleClick = () => {
  console.log('Div clicked');
};
</script>
