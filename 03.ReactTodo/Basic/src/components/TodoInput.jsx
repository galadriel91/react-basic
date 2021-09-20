import React from 'react';
import Style from 'Style/components/TodoInput'

const TodoInput = () => {
    return ( 
        <form className={Style.form}>
            <input type="text" placeholder="오늘 할 일을 입력해 주세요"/>
            <button className="xi-arrow-right"></button>
        </form>
    );
}
 
export default TodoInput 