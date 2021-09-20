import React from 'react';
import Style from 'Style/components/TodoItem'

const TodoItem = ({item}) => {
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
                    <button className="xi-minus-square-o"></button>
                </div>
            </div>
        </li>
    );
}
 
export default TodoItem;