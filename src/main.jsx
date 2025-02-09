import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './assets/scss/main.scss'
import { store } from './store/store.js'
import { Provider } from 'react-redux'
createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
)