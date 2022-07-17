import { defineComponent } from "vue";
import Child from "./child";
export default defineComponent(() => {
  const fnRender = (msg) => {
    return <p>from father: {msg}</p>;
  };
  return () => {
    return (
      <>
        <div>index</div>
        <Child fnRender={fnRender} />
      </>
    );
  };
});
