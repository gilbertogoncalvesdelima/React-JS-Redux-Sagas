import { createStore, compose, applyMiddleware } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
//import createSagaMiddleware from 'redux-saga'
import reducers from './reducers'
//import sagas from './sagas'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export const history = createBrowserHistory()
const isProd = ['prd'].includes(process.env.NODE_ENV.toString().trim().toLowerCase())
const composeEnhancers = isProd ? compose : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = []
//const sagaMiddleware = createSagaMiddleware()
//middlewares.push(sagaMiddleware)

const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ["LOGIN", "PARAMS"],
    // blacklist: ['SESS_CONFIG'],
}

const persistedReducer = persistReducer(persistConfig, reducers(history))
const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middlewares, routerMiddleware(history))),
)

const persistor = persistStore(store)
//sagaMiddleware.run(sagas)
export { store, persistor }
