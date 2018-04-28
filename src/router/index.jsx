import React, {Component} from 'react'
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom'
import Home from '../pages/Home'
import Mall from '../pages/Mall'

class Routes extends Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/mall' component={Mall} />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes