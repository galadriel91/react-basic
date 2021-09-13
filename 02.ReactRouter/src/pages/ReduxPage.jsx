import React from 'react'
import { useSelector } from 'react-redux'

const ReduxPage = () => {
    const test = useSelector((state)=>state.test);
    
    return ( 
        <div>
            <h1>{test}</h1>
            <img src={require('Img/redux.png')} alt="" />    
        </div>
    );
}
 
export default ReduxPage;