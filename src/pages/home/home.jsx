import React, { Component } from 'react'
import store from '../../store/store'
import { addTodo } from '../../store/actions'

class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    componentWillMount () {
        store.dispatch(addTodo('xxx'))
    }
    componentDidMount () {
        console.log(store.getState())
        this.setState({
            test: store.getState().todos[0].text
        })
    }
    render () {
        return `welcome home~${this.state.test}`
    }
}

export default Home