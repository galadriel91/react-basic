const addTodo = (data) => {
    return{
        type:'ADD_TODO',
        data
    }
}

const getTodo = () => {
    return{
        type:'GET_TODO'
    }
}

const removeTodo = (data) => {
    return{
        type:'REMOVE_TODO',
        data
    }
}

module.exports = {
    addTodo,
    getTodo,
    removeTodo
}
