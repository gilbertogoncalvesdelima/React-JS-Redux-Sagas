import React from 'react'
import Routes from './routes'

import Header from './components/Header'


const App = () => {
    return (
        <div>
            <h1>Carrosel</h1>
            <div>
                <Header />
                <Routes />
            </div>
        </div>
    )
}

export default App
