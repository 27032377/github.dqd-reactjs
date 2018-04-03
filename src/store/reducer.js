import { visibilityFilters } from './actions.js'
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './types.js'
import { combineReducers } from 'redux'

const initialState = {
    visibilityFilter: visibilityFilters.SHOW_ALL,
    todos: []
}

// reducer最原始模型，函数内处理多个state的key
/*
function todoApp(state = initialState, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return {...state, visibilityFilter: action.filter}
        case ADD_TODO:
            return Object.assign(
                {},
                state,
                {todos: [...state.todos, { text: action.text, completed: false }]}
            )
        case TOGGLE_TODO:
            return Object.assign({}, state, {
                todos: state.todos.map((todo, index) => {
                    if (index === action.index) {
                        return Object.assign({}, todo, {
                            completed: !todo.completed
                        })
                    }
                })
            })
        default:
            return state
    }
}*/


// 不同函数处理不同state的key，这个reducer的合成，它是开发redux应用最基础的模式
/*
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((item, index) => {
                if (index === action.index) {
                    return Object.assign({}, item, {
                        completed: !item.completed
                    })
                }
                return item
            })
        default:
            return state
    }
}

function todoApp(state = initialState, action) {
    switch (action.type) {
        case TOGGLE_TODO:
        case ADD_TODO:
            return {...state, todos: todos(state.todos, action)}
        case SET_VISIBILITY_FILTER:
            return {
                ...state,
                visibilityFilter: action.filter
            }
        default:
            return state
    }
}*/

// 深入理解如何进行reducer合成
// 每个ruducer只负责管理全局state中它负责的一部分。每个reducer参数中的state都不一样，分别管理对应那一块数据。
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((item, index) => {
                if (index === action.index) {
                    return {...item, completed: !item.completed}
                }
                return item
            })
        default:
            return state
    }
}

function visibilityFilter(state = visibilityFilters.SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

/*function todoApp(state = initialState, action) {
    return {
        visibility: visibilityFilter(state.visibility, action),
        todos: todos(state.todos, action)
    }
}*/

// redux提供{combineReducers}方法来做reducer合成的事情，下面的代码和上面注释的代码等价
// combineReducers()所做的只是生成一个函数，这个函数来调用一些列的reducer，每个reducer根据
// 它们的key来筛选出state中的一部分数据并处理，然后这个生成的函数再将所有reducer的结果合并成
// 一个大的对象
const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp