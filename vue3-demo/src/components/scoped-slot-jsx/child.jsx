import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "child-index",
  props: ["fnRender"],
  setup(props) {
    // console.log("props", props.fnRender);
    const msgRef = ref("作用域插槽 child");
    return () => {
      return (
        <div>
          <p>child-scope-slot</p>
          {props.fnRender(msgRef.value)}
        </div>
      );
    };
  },
});
