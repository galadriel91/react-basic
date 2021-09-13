import React from 'react'
import RouterNav from 'Components/RouterNav';
import { Route } from 'react-router-dom'
import MainPage from 'Pages/MainPage';
import WebpackPage from 'Pages/WebpackPage';
import ReduxPage from 'Pages/ReduxPage';

import 'Style/index';

const App = () => {
    return ( 
        <div>
            <RouterNav/>
            <div className="container">
                <Route path="/" component={MainPage} exact={true}></Route>
                <Route path="/webpack" component={WebpackPage}></Route>
                <Route path="/redux" component={ReduxPage}></Route>
            </div>
        </div>
    );
}
 
export default App;