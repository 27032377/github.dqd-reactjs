import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import todoApp from './reducers'

const initialState = {
    headerActive: '1',
    communityState: {
        itemIndex: 1
    },
    shoppingState: {
        itemIndex: 0
    },
    footerActive: '1'
}

const store = createStore(todoApp, initialState, applyMiddleware(thunk))

export default store
