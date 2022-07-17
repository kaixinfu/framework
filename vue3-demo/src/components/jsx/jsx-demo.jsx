import { defineComponent, ref, reactive } from "vue";
import Child from "./jsx-child";

// 1.组件配置
const demo1 = defineComponent({
  name: "jsx-demo1",
  props: [],
  setup() {
    const nameRef = ref("jsx-demo1");

    const ageRef = ref(10);
    const fnHandler = () => {
      ageRef.value++;
    };

    const visibleRef = ref(true);
    const fnChange = () => {
      visibleRef.value = !visibleRef.value;
    };

    const state = reactive({
      list: [1, 2, 3],
    });
    const fnChangeArr = () => {
      state.list.push(state.list.length + 1);
    };
    return () => {
      return (
        <>
          <p>compName: {nameRef.value}</p>
          <Child age={ageRef.value} />
          <button onClick={fnHandler}>+</button>
          {visibleRef.value ? <Child age={ageRef.value} /> : null}
          <button onClick={fnChange}>change</button>
          {state.list.map((item) => {
            return <Child age={item} key={item} />;
          })}
          <button onClick={fnChangeArr}>changeList</button>
        </>
      );
    };
  },
});
// 2.setup函数
// const demo2 = defineComponent(() => {
//   const nameRef = ref("jsx-demo2");
//   const fnRender = () => {
//     return <p>compName: {nameRef.value}</p>;
//   };
//   return fnRender;
// });

export default demo1;
