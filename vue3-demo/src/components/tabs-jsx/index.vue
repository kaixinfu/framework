<template>
  <tabs default-active-key="1" @change="onTabsChange">
    <tab-panel key="1" title="title1">
      <div>tab panel content 1</div>
    </tab-panel>
    <tab-panel key="2" title="title2">
      <div>tab panel content 2</div>
    </tab-panel>
    <tab-panel key="3" title="title3">
      <div>tab panel content 3</div>
    </tab-panel>
  </tabs>
</template>

<script>
import Tabs from "./Tabs.jsx";
import TabPanel from "./TabPanel";

export default {
  name: "Tabs-index",
  components: { Tabs, TabPanel },
  methods: {
    onTabsChange(key) {
      console.log("tab changed", key);
    },
  },
};
</script>
