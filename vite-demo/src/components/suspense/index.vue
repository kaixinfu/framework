<template>
    <suspense>
        <template #default>
            <child />
        </template>
        <template #fallback>
            <div>
                Loading...
            </div>
        </template>
    </suspense>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components: {
        child: defineAsyncComponent(() => import('./child.vue'))
    }
}
</script>