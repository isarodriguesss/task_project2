import { createApp } from 'vue'
import App from './App.vue'
import Structure from './components/Structure.vue'
import icons from './components/icons/icons.vue'

const app = createApp(App);

app.component(
    'structure-template', Structure
)
app.component(
    'icons-mdi', icons
)
app.mount('#app')