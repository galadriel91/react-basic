const { produce } = require('immer');
const initialState = {
    posts:[]
}

const todoReducer = (prevState = initialState , action) => {
    return produce(prevState, (draft)=>{
        switch(action.type){
            case 'ADD_TODO':
                draft.posts.push(action.data);
                localStorage.setItem('lists' , JSON.stringify(draft))
                break
            case 'GET_TODO':
                if(localStorage.lists){
                    draft.posts = JSON.parse(localStorage.lists)
                }
                break
            default:
                break
        }
    })
}

module.exports = todoReducer