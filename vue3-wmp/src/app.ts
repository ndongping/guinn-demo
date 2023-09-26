import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './app.scss'

const App = createApp({
  onLaunch: (option) => {
    console.log('onLaunched===', option)
  },
})

App.use(createPinia())

export default App
