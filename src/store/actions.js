import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './types.js'

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
}