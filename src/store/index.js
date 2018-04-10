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

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import todoApp from './reducers'

const initialState = {
    todos: [
        {id: 1, completed: true, text: 'xxx'}
    ],
    visibilityFilter: 'SHOW_ALL',
    headerActive: '1'
}

const store = createStore(todoApp, initialState, applyMiddleware(thunk))

export default store
