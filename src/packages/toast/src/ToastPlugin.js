import Toast from './toast.vue'
function createToast({Vue,propsData,closeCurrentToast}){
//    console.log(tes)
    let vueConstructor=Vue.extend(Toast)
    let toast=new vueConstructor({
        propsData
    })
    toast.$mount()
    toast.$on('close',closeCurrentToast)
    document.body.appendChild(toast.$el)
    return toast
}
let currentToast
export default {
   install(Vue,options){
       Vue.prototype.$toast=function(toastOptions){
        // console.log(2)
           if(currentToast){
            //    console.log(96)
               currentToast.close()
                // currentToast=null
           }
           currentToast=createToast({
               Vue,
               propsData:toastOptions,
               closeCurrentToast:()=>{
                //    console.log(currentToast)
                //    console.log(566)
                   currentToast=null
                //    console.log(currentToast)
               }
           })
        //    console.log(toastOptions)
       }
   }
}