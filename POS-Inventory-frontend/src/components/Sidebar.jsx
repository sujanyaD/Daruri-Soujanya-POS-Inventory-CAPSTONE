// client/src/components/Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul className="list-group">
                <Link to="/dashboard" className="list-group-item list-group-item-action">Dashboard</Link>
                <Link to="/products" className="list-group-item list-group-item-action">Products</Link>
                <Link to="/users" className="list-group-item list-group-item-action">Users</Link>
                {/* Add more sidebar links as needed */}
            </ul>
        </div>
    );
};

export default Sidebar;
