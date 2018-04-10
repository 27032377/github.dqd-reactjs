import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import { HEADER_ACTIVE } from '../types'

const headerActive = (state = '', action) => {
    switch (action.type) {
        case HEADER_ACTIVE:
            return action.index
        default:
            return state
    }
}

const todoApp = combineReducers({
    todos,
    visibilityFilter,
    headerActive
})

export default todoApp