import React from 'react'
import { NavLink } from 'react-router-dom'
import Style from 'Style/partials/RouterNav'

const RouterNav = () => {

    return ( 
        <header>
            <div className={Style.headerWrap}>
                <h1><NavLink to="/">React Router</NavLink></h1>
                <nav>
                    <ul>
                        <li><NavLink to="/" exact={true} activeClassName={Style.activeClass}>Router</NavLink></li>
                        <li><NavLink to="/webpack" activeClassName={Style.activeClass}>Webpack</NavLink></li>
                        <li><NavLink to="/redux" activeClassName={Style.activeClass}>Redux</NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
     );
}
 
export default RouterNav;