// 纯redux例子

/*
import { createStore } from 'redux'
import todoApp from './reducers/index-redux'

const initialState = {
    visibilityFilter: '',
    todos: []
}
const store = createStore(todoApp, initialState)


export default store*/

import { createStore } from 'redux'
import todoApp from './reducers'

const initialState = {
    todos: [],
    visibilityFilter: 'SHOW_ALL'
}

const store = createStore(todoApp, initialState)

export default store
