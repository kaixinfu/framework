<template>
  <p>scoped-slot-template</p>
  <child>
    <!-- <p>scoped slot</p> -->

    <template v-slot:default="slotProps">
      <p>msg: {{ slotProps.msg }} 123123</p>
    </template>
  </child>
</template>

<script>
import child from "./child";

export default {
  name: "scope-index",
  components: { child },
};
</script>
