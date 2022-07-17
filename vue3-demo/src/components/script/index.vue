<template>
  <p @click="fnAdd">{{ ageRef }}</p>
  <p @click="fnAdd">{{ state.name }}, {{ name }}</p>
  <Child1 />
  <Child2 :name="name" :age="age" @change="change" @delete="fnDelete" />
  <Child3 ref="childRef" />
</template>
<script>
function add(a, b) {
  return a + b;
}
</script>
<script setup name="app-index">
import { ref, reactive, toRefs, onMounted } from "vue";
import Child1 from "./child1.vue";
import Child2 from "./child2.vue";
import Child3 from "./child3.vue";
console.log(add(10, 20));
const ageRef = ref(10);
const fnAdd = () => {
  ageRef.value++;
};

const state = reactive({ name: "kk", age: 20 });
const { name, age } = toRefs(state);
const change = e => {
  console.log("change.e", e)
  state.age ++
}
const fnDelete = e => {
  console.log("delete.e", e)
  state.age --
}

const childRef = ref(null)
onMounted(() => {
  console.log("childRef", childRef.value)
})
</script>
