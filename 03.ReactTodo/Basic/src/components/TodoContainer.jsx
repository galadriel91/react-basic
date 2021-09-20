import React from 'react';
import TodoItem from 'Components/TodoItem'
import Style from 'Style/components/TodoContainer'
import { useSelector } from 'react-redux'


const TodoContainer = () => {
    const ITEMS = useSelector((state)=>state.todos)
    return ( 
        <ul className={Style.ul}>
            {
                ITEMS.map(v=>(
                    <TodoItem item={v} key={v.id}/>
                ))
            }
        </ul>
    );
}
 
export default TodoContainer;