import { CHANGE_COMMUNITY_ITEM, CHANGE_MATCH_INDEX } from '../types'

const communityState = (state = {}, action) => {
    switch (action.type) {
        case CHANGE_COMMUNITY_ITEM:
            return {...state, itemIndex: action.index}
        case CHANGE_MATCH_INDEX:
            return {...state, matchIndex: action.index}
        default:
            return state
    }
}

export  default communityState