import { configureStore } from '@reduxjs/toolkit'
import todoreducer  from '../allfunction/minions'

const store = configureStore({
    reducer: todoreducer
})

export default store;