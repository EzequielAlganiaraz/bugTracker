import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { AuthRouter } from './AuthRouter'
import { TrackerScreen } from '../components/tracker/TrackerScreen'

export const AppRouter = () => {
    return (
        <Router>
            <div>

                <Switch>
                    <Route
                        path='/auth'
                        component={AuthRouter}
                    />
                    <Route
                        exact
                        path='/'
                        component={TrackerScreen}
                    />
                    <Redirect
                        to="/auth/login"
                    />
                </Switch>

            </div>
        </Router>
    )
}
