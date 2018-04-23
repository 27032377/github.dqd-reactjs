import {CHANGE_SHOPPING_ITEM} from '../types'

const shoppingState = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_SHOPPING_ITEM:
            return {...state, itemIndex: action.index}
        default:
            return state
    }
}

export default shoppingState