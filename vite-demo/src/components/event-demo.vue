<template>
  <p @click="fnSayA(), fnSayB()">event-demo</p>
</template>

<script>
import { onMounted, getCurrentInstance } from "vue";

export default {
  name: "GetInstance",
  data() {
    return {
      x: 1,
      y: 2,
    };
  },
  setup() {
    const fnSayA = () => {
      console.log("a");
    };
    const fnSayB = () => {
      console.log("b");
    };
    return { fnSayA, fnSayB}
  },
};
</script>
