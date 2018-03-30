import React, {Component} from 'react'
import { HashRouter, Switch, Route, Redirect  } from 'react-router-dom'
import Home from '../pages/home/home.jsx'
import Fav from '../pages/fav/fav.jsx'

class Routes extends Component {
    render () {
        return (
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/fav' component={Fav} />
                    <Redirect to="/" />
                </Switch>
            </HashRouter>
        )
    }
}

export default Routes