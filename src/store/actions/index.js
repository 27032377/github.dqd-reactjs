import * as types from '../types'
export const headerActive = index => {
    return {
        type: types.HEADER_ACTIVE,
        index
    }
}

export const communityState = index => {
    return {
        type: types.CHANGE_COMMUNITY_ITEM,
        index
    }
}

export const shoppingState = index => {
    return {
        type: types.CHANGE_SHOPPING_ITEM,
        index
    }
}

export const footerActive = index => {
    return {
        type: types.FOOTER_ACTIVE,
        index
    }
}