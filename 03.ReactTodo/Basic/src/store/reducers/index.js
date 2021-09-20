const { combineReducers } = require('redux');
const todoReducer = require('./todoReducer')

module.exports = combineReducers({
    todos:todoReducer
})