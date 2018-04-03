import { SET_VISIBILITY_FILTER } from '../types'

const visibilityFilter = (state= 'SHOWALL', action) => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}

export default visibilityFilter