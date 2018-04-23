import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import { HEADER_ACTIVE } from '../types'
import communityState from './communityState'
import shoppingState from './shoppingState'

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
    headerActive,
    communityState,
    shoppingState
})

export default todoApp