const { produce } = require('immer');
const initialState = []

const todoReducer = (prevState = initialState , action) => {
    return produce(prevState, (draft)=>{
        switch(action.type){
            case 'ADD_TODO':
                draft.push(action.data);
                localStorage.setItem('lists' , JSON.stringify(draft))
                break
            default:
                break
        }
    })
}

module.exports = todoReducer