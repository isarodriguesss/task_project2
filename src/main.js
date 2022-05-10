import { createApp } from 'vue'
import App from './App.vue'
import Structure from './components/Structure.vue'

const app = createApp(App);

app.component(
    'structure-template', Structure
)
app.mount('#app')