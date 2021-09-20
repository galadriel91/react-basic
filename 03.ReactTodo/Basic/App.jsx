import React from 'react';
import TodoHeader from 'Components/TodoHeader'
import TodoInput from 'Components/TodoInput'
import TodoContainer from 'Components/TodoContainer'
import 'Style/index';

const App = () => {
    return ( 
        <div className="container">
            <TodoHeader/>
            <TodoInput/>
            <TodoContainer/>
        </div>
    );
}
 
export default App;