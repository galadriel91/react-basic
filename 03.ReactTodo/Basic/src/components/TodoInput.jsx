import React , { useState, useCallback } from 'react';
import Style from 'Style/components/TodoInput'
import { useDispatch } from 'react-redux'
import { addTodo } from 'Store/actions/todos'

const TodoInput = () => {
    const dispatch = useDispatch()
    const [value , setValue] = useState('')

    const onChangeInput = useCallback((e)=>{
        setValue(e.target.value)
    },[value])

    const onSubmitForm = (e) => {
        e.preventDefault();
        dispatch(addTodo({
            title:value,
            id:Date.now(),
            isChecked:false
        })) 
        setValue('')
    }

    return ( 
        <form className={Style.form} onSubmit={onSubmitForm}>
            <input type="text" placeholder="오늘 할 일을 입력해 주세요" value={value} onInput={onChangeInput}/>
            <button className="xi-arrow-right" type="submit"></button>
        </form>
    );
}
 
export default TodoInput 