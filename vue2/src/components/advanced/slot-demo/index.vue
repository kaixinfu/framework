<template>
    <div>
        <!-- <slot-default :url="website.url">
            {{website.title}}
        </slot-default> -->
        <slotScoped :url="website.url">
            <template v-slot="slotProps">
                {{slotProps.slotData.title}}
            </template>
        </slotScoped>
    </div>
</template>

<script>
// import slotDefault from './slot-default'
import slotScoped from './slot-scoped'
export default {
    components: {
        // slotDefault
        slotScoped
    },
    data() {
        return {
            website: {
                url: 'http://baidu.com/',
                title: 'lagou',
                subTitle: '拉勾招聘'
            }
        }
    }
}
</script>