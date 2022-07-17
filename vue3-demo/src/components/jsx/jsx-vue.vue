<script>
import { ref } from "vue";
export default {
  name: "jsx-vue",
  setup() {
    const nameRef = ref("jsx-vue");
    return () => {
      return <p>compName: {nameRef.value}</p>;
    };
  },
};
</script>
