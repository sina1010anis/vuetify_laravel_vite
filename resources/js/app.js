import { components } from 'vuetify/dist/vuetify-labs.js';
import './bootstrap';
import {createApp} from 'vue/dist/vue.esm-bundler';
import vuetify from "./vuetify";
import HelloWorld from "./Pages/HelloWorld.vue"



const app = createApp({
    data :() => ({
        version : "vuejs 3v"
    }),
    components: {
        HelloWorld:HelloWorld
    }
})


app.use(vuetify).mount("#app")
