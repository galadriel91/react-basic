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

module.exports = {
    addTodo,
    getTodo
}
