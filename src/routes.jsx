import React from 'react'
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom'
import Dashboard from './pages/Dashboard/Dashboard'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' element={<Dashboard />} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes