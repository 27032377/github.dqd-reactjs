import { createStore } from 'redux'
import todoApp from './reducer.js'

const initialState = {
    visibilityFilter: '',
    todos: []
}
const store = createStore(todoApp, initialState)


export default store