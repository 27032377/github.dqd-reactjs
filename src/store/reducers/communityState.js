import { CHANGE_COMMUNITY_ITEM } from '../types'

const communityState = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_COMMUNITY_ITEM:
            return {...state, itemIndex: action.index}
        default:
            return state
    }
}

export  default communityState