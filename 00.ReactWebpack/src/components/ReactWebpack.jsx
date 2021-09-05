import React from 'react';
import 'Style/partials/ReactWebpack'

const ReactWebpack = () => {
    return ( 
        <div>
            <h1>React Webpack Setting</h1>
            <img src={require('Img/webpack.png')} alt="" />
        </div>
    );
}
 
export default ReactWebpack;