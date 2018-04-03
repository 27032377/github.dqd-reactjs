// 纯redux例子
/*
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './types'

export const visibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

export function removeTodo(index) {
    return {
        type: REMOVE_TODO,
        index
    }
}

export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}*/

// 结合react-redux实现

import { ADD_TODO, SET_VISIBILITY_FILTER, TOGGLE_TODO } from '../types'

let nextTodoId = 0
export const addTodo = text => {
    return {
        type: ADD_TODO,
        id: nextTodoId++,
        text
    }
}

export const setVisibilityFileter = filter => {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    }
}

export const toggleTodo = id => {
    return {
        type: TOGGLE_TODO,
        id
    }
}
