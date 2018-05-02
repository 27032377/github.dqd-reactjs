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

export const changeGameItem = index => {
    return {
        type: types.CHANGE_GAME_ITEM,
        index
    }
}

export const footerActive = index => {
    return {
        type: types.FOOTER_ACTIVE,
        index
    }
}

export const headerSwi = bool => {
    return {
        type: types.HEADER_SWI,
        bool
    }
}

export const headerLocation = str => {
    return {
        type: types.HEADER_LOCATION,
        str
    }
}

export const headerTitle = str => {
    return {
        type: types.HEADER_TITLE,
        str
    }
}

export const changeShoppingActive = index => {
    return {
        type: types.CHANGE_SHOPPING_ACTIVE,
        index
    }
}