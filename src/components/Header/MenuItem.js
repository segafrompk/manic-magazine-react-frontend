import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ highlight, title, route }) => {
    return (
        <NavLink
            to={route}
            activeClassName='menu-active'
            className={`menu-item${highlight ? ' ' + highlight : ''}`}
        >
            {title}
        </NavLink>
    );
};

export default MenuItem;
