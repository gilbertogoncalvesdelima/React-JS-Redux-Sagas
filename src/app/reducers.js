import { combineReducers } from "redux"
import { connectRouter } from "connected-react-router"

import reducers from "../redux/reducers"

export default (history) =>
    combineReducers({
        router: connectRouter(history),
        ...reducers
    })
