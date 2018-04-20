import React, {Component} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../store/actions'
import store from '../../store'

class AddTodo extends Component {
    render () {
        let input
        return (
            <div>
                <form
                    onSubmit={e => {
                        e.preventDefault()
                        if (!input.value.trim()){
                            return
                        }
                        store.dispatch(addTodo(input.value))
                        input.value = ''
                    }}
                >
                    <input ref={node =>{input = node}}/>
                    <button type="submit">Add Todo</button>
                </form>
            </div>
        )
    }
}

AddTodo = connect()(AddTodo)

export default AddTodo