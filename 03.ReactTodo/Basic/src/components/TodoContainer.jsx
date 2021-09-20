import React ,{ useEffect } from 'react';
import TodoItem from 'Components/TodoItem'
import Style from 'Style/components/TodoContainer'
import { useSelector , useDispatch } from 'react-redux'
import { getTodo } from 'Store/actions/todos'


const TodoContainer = () => {
    const dispatch = useDispatch();
    const ITEMS = useSelector((state)=>state.todos.posts);

    useEffect(()=>{
        dispatch(getTodo())
    },[])

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