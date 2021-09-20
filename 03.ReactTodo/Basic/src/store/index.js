const { createStore } = require('redux');
const { composeWithDevTools } = require('redux-devtools-extension')
const reducer = require('./reducers/index')
const enhancer = composeWithDevTools()

const store = createStore(reducer , enhancer)

module.exports = store