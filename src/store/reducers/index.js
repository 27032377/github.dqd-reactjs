import { combineReducers } from 'redux'
import { HEADER_ACTIVE, FOOTER_ACTIVE } from '../types'
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

const footerActive = (state = '', action) => {
    switch (action.type) {
        case FOOTER_ACTIVE:
            return action.index
        default:
            return state
    }
}

const todoApp = combineReducers({
    headerActive,
    communityState,
    shoppingState,
    footerActive
})

export default todoApp