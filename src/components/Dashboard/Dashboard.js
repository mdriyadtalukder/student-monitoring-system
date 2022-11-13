import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center  bg-gradient-to-r from-sky-200 via-cyab-200 to-blue-200">
                <Outlet />

                <label for="my-drawer-2" class="btn btn-info drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 w-80 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>Users</Link></li>
                    <li><Link to='/dashboard/myprofile'>My Profile</Link></li>
                    <li><Link to='/dashboard/mycourse'>My Courses</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;