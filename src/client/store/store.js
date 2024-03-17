import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from './combineReducers';
import {thunk} from 'redux-thunk';

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

export default { store, persistor };