const { createStore } = require('redux');
const {composeWithDevTools } = require('redux-devtools-extension')
const enhancer = composeWithDevTools()
const reducer = require('./reducers/index')

const store = createStore(reducer , enhancer)

module.exports = store