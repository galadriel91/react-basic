const { createStore } = require('redux');
const { composeWithDevTools } = require('redux-devtools-extension')
const reducer = require('./reducers/index')

const enhancer = composeWithDevTools()

export const store = createStore(reducer , enhancer)





