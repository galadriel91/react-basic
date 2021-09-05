const { combineReducers } = require('redux');
const numberReducer = require('./number');

module.exports = combineReducers({
    number:numberReducer
})