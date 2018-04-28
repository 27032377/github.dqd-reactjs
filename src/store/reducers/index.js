import { combineReducers } from 'redux'
import { FOOTER_ACTIVE } from '../types'
import communityState from './communityState'
import shoppingState from './shoppingState'
import headerData from './headerData'

const footerActive = (state = '', action) => {
    switch (action.type) {
        case FOOTER_ACTIVE:
            return action.index
        default:
            return state
    }
}

const todoApp = combineReducers({
    communityState,
    shoppingState,
    footerActive,
    headerData
})

export default todoApp