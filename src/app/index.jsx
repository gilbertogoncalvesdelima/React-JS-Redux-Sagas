import React from 'react'
import { store, persistor } from './store'
import { Provider } from 'react-redux'
import Routes from '../routes'
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Routes />
            </PersistGate>
        </Provider>
    )
}

export default App
