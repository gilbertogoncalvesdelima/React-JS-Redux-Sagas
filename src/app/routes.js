import react from 'react'

import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'

import Adm from './views/Adm/Index'
import Catalogo from './views/Catalogo/Index'
import Contato from './views/Contato/Index'
import Pedidos from './views/Pedidos/Index'

const RoutesComp = () => {
    return (
        <Router>
            <Route path='/' exact component={Catalogo} />
            <Route path='/catalogo' component={Catalogo} />
            <Route path='/contato' component={Contato} />
            <Route path='/pedidos' component={Pedidos} />
            <Route path='/adm' component={Adm} />
        </Router>
    )
}

export default RoutesComp