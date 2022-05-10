import { createApp } from 'vue'
import App from './App.vue'
import Structure from './components/Structure.vue'

//createApp(App).mount('#app')

const app = createApp(App);

app.component(
    'structure-template', Structure
)
app.mount('#app')

//const compiler = require('vue-template-compiler')
