import React, {Component} from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from '../pages/Home/index'
import Mall from '../pages/Mall'
import HotSection from '../pages/HotSection'
import Comment from '../pages/Comment'

class Routes extends Component {
    render () {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/mall' component={Mall} />
                    <Route path='/hotsection' component={HotSection}/>
                    <Route path='/comment' component={Comment} />
                    <Redirect to="/" />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default Routes