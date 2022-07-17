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

// slot是vue发明的概念，为了完善template的能力
// slot一直是vue初学者的噩梦，特别是作用域插槽