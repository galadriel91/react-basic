import React , { useCallback, useEffect } from 'react';
import { useDispatch , useSelector } from 'react-redux'
import { add_number , minus_number} from 'Store/actions/number'
import 'Style/partials/ReactRedux'

const ReactRedux = () => {
    const dispatch = useDispatch();
    const number = useSelector((state)=>state.number);
    
    const plusNum = useCallback(()=>{
        dispatch(add_number())
    })
    const minusNum = useCallback(()=>{
        dispatch(minus_number())
    })

    return ( 
        <div>
            <h1>React Redux Setting</h1>
            <img src={require('Img/redux.png')} alt="" />
            <div>
                <p>{number}</p>
                <button onClick={plusNum}>Plus</button>
                <button onClick={minusNum}>Minus</button>
            </div>
        </div>
    );
}
 
export default ReactRedux;