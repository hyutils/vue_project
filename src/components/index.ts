import SvgIcon from './SvgIcon/SvgIcon.vue'

const allGlobalComponent:Record<any,any> = { SvgIcon }
export default {
    install(e: any) {
        console.log(123);
        Object.keys(allGlobalComponent).forEach(key=>{
            e.component(key, allGlobalComponent[key])
        })
    }
}