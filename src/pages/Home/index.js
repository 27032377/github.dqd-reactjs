import React, { Component } from 'react'
import Footer from '../../components/Footer'
import AddTodo from '../../containers/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'

class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    render () {
        return (
            <div>
                <AddTodo/>
                <VisibleTodoList/>
                <Footer/>
            </div>
        )
    }
}

export default Home