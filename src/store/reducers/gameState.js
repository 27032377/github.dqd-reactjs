import {CHANGE_GAME_ITEM} from '../types'

const gameState = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_GAME_ITEM:
            return {...state, itemIndex: action.index}
        default:
            return state
    }
}

export default gameState