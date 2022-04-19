import React from 'react';
import { NavLink } from "react-router-dom"; 

import './navcss.css'

class Nav extends React.Component {
    render() {
        return (
            <div className="topnav">
                <NavLink to="/" activeClassName="active" exact={true}>
                    Home
                </NavLink>
                <NavLink to="/todo" activeClassName="active">
                    Todo
                </NavLink>
                <NavLink to="/about" activeClassName="active">
                    About
                </NavLink>
                <NavLink to="/users" activeClassName="active">
                    Users
                </NavLink>

            </div>
        )
    }
}
export default Nav;