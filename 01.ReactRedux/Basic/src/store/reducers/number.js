const intialState = 0

const numberReducer = (prevState = intialState , action) => {
    switch(action.type){
        case 'ADD_NUMBER':
            return prevState + 1
        case 'MINUS_NUMBER':
            return prevState - 1
        default:
            return prevState        
    }
}

module.exports = numberReducer