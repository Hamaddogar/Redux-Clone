 
 import  {createStore} from 'redux'
 import { persistStore, persistReducer } from 'redux-persist'
 import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 import {getvalue } from '../store/reducers/reducer'

 
//  const persistConfig = {
//    key: 'root',
//    storage,
//  }
//  const persistedReducer = persistReducer(persistConfig, getvalue)
 
    let  store = createStore(getvalue)
  // // let persistor = persistStore(store)
  // export default { store, persistor }
   export default store
