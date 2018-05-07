import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import todoApp from './reducers'

const initialState = {
    headerData: {
        headerActive: '1',
        swi: true,
        location: 'left',
        title: '懂球帝'
    },
    communityState: {
        itemIndex: 1,
        matchIndex: 1
    },
    gameState: {
        itemIndex: 0
    },
    shoppingState: {
        active: 0
    },
    footerActive: '1'
}

const store = createStore(todoApp, initialState, applyMiddleware(thunk))

export default store
