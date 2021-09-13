const initialState = 'React Redux Setting'

const testReducer = (prevState = initialState , action) => {
    switch(action.type){
        default :
            return prevState
    }
}

module.exports = testReducer