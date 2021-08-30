import React from 'react'
import { Switch, Route } from 'react-router'
import { MainBase } from '../components'
import Home from '../views/home'

const CreateRoutesComp = () => {

    return (
        <MainBase>
            <Switch>
                <Route render={(props) => <Home />} />
            </Switch>
        </MainBase>
    )
}

export default CreateRoutesComp
