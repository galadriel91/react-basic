const { combineReducers } = require('redux');
const testReducer = require('./testReducer')

module.exports = combineReducers({
    test:testReducer
})