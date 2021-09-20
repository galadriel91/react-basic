const { produce } = require('immer');
const initialState = []

const todoReducer = (prevState = initialState , action) => {
    return produce(prevState, (draft)=>{
        switch(action.type){
            default:
                break
        }
    })
}

module.exports = todoReducer