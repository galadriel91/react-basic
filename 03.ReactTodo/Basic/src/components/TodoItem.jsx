import React , { useCallback } from 'react';
import Style from 'Style/components/TodoItem'
import { useDispatch } from 'react-redux'
import { removeTodo } from 'Store/actions/todos'

const TodoItem = ({item}) => {
    const dispatch = useDispatch()

    const removeItem = useCallback(()=>{
        dispatch(removeTodo(item.id))
    },[])

    return ( 
        <li className={Style.li}>
            <div className={Style.itemWrap}>
                <div className={Style.checkWrap}>
                    <button className="xi-checkbox-blank"></button>
                    {/* <button className="xi-check-square-o"></button> */}
                </div>
                <div className={Style.titleWrap}>
                    <h4>{item.title}</h4>
                </div>
                <div className={Style.buttonWrap}>
                    <button className="xi-minus-square-o" onClick={removeItem}></button>
                </div>
            </div>
        </li>
    );
}
 
export default TodoItem;