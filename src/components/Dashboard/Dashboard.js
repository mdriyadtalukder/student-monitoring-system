import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css'

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div id='bgc' class="drawer-content flex flex-col items-center justify-center">
                <Outlet />

                <label for="my-drawer-2" class="btn btn-info drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 w-80 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>Users</Link></li>
                    <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;