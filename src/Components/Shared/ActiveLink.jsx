import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
        to={to}
        className={({ isActive }) =>isActive ? "text-info text-decoration-none p-2  fw-bold  m-1 " : "text-white text-decoration-none fw-bold p-2 m-1 "}
        
       >
          {children}
      </NavLink>
    );
};

export default ActiveLink;