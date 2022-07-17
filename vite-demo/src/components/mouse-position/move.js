import { reactive, toRefs, onUnmounted } from "vue"
export const fnMouseMove = () => {
    const obj = reactive({
        x: 0,
        y: 0
    })
    const fnMove = e => {
        obj.x = e.pageX
        obj.y = e.pageY
    }
    window.addEventListener("mousemove", fnMove)
    onUnmounted(() => {
        window.removeEventListener("mousemove", fnMove)
    })
    return toRefs(obj)
}