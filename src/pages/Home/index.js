import React, { Component } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import AddTodo from '../../containers/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'
import './header.css'

class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    render () {
        return (
            <div>
                <Header title="懂球帝" />
                <AddTodo/>
                <VisibleTodoList/>
                <Footer/>
            </div>
        )
    }
}

export default Home