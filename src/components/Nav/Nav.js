import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }
    return (
        <div>
            <NavLink activeStyle={activeStyle} to="/friends">friends</NavLink>
            <NavLink activeStyle={activeStyle} to="/header">header</NavLink>
            <NavLink activeStyle={activeStyle} to="/about">about</NavLink>
        </div>
    );
};

export default Nav;