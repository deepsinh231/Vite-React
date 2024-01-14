import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './app/store.js'

ReactDOM.createRoot(document.getElementById('Deepsinh231')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
