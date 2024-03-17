import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import LandingReducer from './home/index'
import cartReducer from './cart/index'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
  cart: cartReducer,
  landing: LandingReducer,
})

export default persistReducer(persistConfig, rootReducer)