import { defineComponent, ref } from "vue";

// 组件配置
const demo1 = defineComponent({
  name: "jsx-child",
  props: ["age"],
  setup(props) {
    console.log("props", props)
    const nameRef = ref("jsx-child");
    const fnRender = () => {
      return (
        <p>
          compName: {nameRef.value}, {props.age}
        </p>
      );
    };
    return fnRender;
  },
});

export default demo1;
