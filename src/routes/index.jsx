import React from "react";
import { history } from "../app/store";
import { ConnectedRouter } from "connected-react-router";

import CreateRouter from "./createRouter";

export default () => (
    <ConnectedRouter history={history}>
        <CreateRouter />
    </ConnectedRouter>
);