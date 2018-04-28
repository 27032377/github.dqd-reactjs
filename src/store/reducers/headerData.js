import {HEADER_ACTIVE, HEADER_SWI, HEADER_LOCATION, HEADER_TITLE} from '../types'

const headerData = (state = '', action) => {
    switch (action.type) {
        case HEADER_ACTIVE:
            return {...state, headerActive: action.index}
        case HEADER_SWI:
            return {...state, swi: action.bool}
        case HEADER_LOCATION:
            return {...state, location: action.str}
        case HEADER_TITLE:
            return {...state, title: action.str}
        default:
            return state
    }
}

export default headerData