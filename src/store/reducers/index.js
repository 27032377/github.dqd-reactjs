import { combineReducers } from 'redux'
import { FOOTER_ACTIVE } from '../types'
import communityState from './communityState'
import gameState from './gameState'
import headerData from './headerData'
import shoppingState from './shoppingState'

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
    gameState,
    footerActive,
    headerData,
    shoppingState
})

export default todoApp