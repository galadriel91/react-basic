const addTodo = (data) => {
    return{
        type:'ADD_TODO',
        data
    }
}

module.exports = {
    addTodo
}
