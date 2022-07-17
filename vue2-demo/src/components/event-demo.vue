<template>
  <p @click="fnSayA(), fnSayB()">event-demo</p>
</template>

<script>
export default {
  name: "GetInstance",
  data() {
    return {
      x: 1,
      y: 2,
    };
  },
  methods: {
    fnSayA() {
      console.log("a");
    },
    fnSayB() {
      console.log("b");
    },
  },
};
</script>
