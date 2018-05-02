import {CHANGE_SHOPPING_ACTIVE} from '../types'

const shoppingState = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_SHOPPING_ACTIVE:
            return {...state, active: action.index}
        default:
            return state
    }
}

export default shoppingState