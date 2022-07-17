<template>
  <!-- <jsx-vue /> -->
  <jsx-demo />
</template>

<script>
// import jsxVue from "./jsx-vue.vue";
import jsxDemo from "./jsx-demo";
export default {
  name: "jsx-index",
  components: {
    // jsxVue,
    jsxDemo
  },
};
// jsx本质是js,可以是用js的任何能力
// template只能嵌入简单的js表达式，其他需要指令，比如v-if
// jsx已经成为es规范，template还是vue的规范

// 两者本质相同，都会被编译成js代码（render函数）

</script>
