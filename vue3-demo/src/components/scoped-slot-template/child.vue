<template>
  <p>child</p>
  <slot :msg="msg"></slot>
</template>

<script>
export default {
  name: "child-index",
  data() {
    return {
      msg: "作用域插槽 Child",
    };
  },
};
</script>
