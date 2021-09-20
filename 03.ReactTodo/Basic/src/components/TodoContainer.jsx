import React from 'react';
import TodoItem from 'Components/TodoItem'
import Style from 'Style/components/TodoContainer'

const TodoContainer = () => {
    return ( 
        <ul className={Style.ul}>
            <TodoItem/>
        </ul>
    );
}
 
export default TodoContainer;