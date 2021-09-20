const { produce } = require('immer');
const initialState = {
    posts:[]
}

const todoReducer = (prevState = initialState , action) => {
    return produce(prevState, (draft)=>{
        switch(action.type){
            case 'ADD_TODO':
                draft.posts.push(action.data);
                localStorage.setItem('lists' , JSON.stringify(draft.posts))
                break
            case 'GET_TODO':
                if(localStorage.lists){
                    draft.posts = JSON.parse(localStorage.lists)
                }
                break
            case 'REMOVE_TODO':
                const index = draft.posts.findIndex(v=>v.id === action.data)
                draft.posts.splice(index,1)
                localStorage.setItem('lists' , JSON.stringify(draft.posts))
            default:
                break
        }
    })
}

module.exports = todoReducer