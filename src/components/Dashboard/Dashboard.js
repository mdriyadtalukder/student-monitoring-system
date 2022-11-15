import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../useAdmin/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    const [datas, setData] = useState([])
    const [loading, setloading] = useState(true);
    console.log(admin)
    return (
        <div class="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center  bg-gradient-to-r from-sky-200 via-cyab-200 to-blue-200">
                <Outlet />

                <label for="my-drawer-2" class="btn btn-info drawer-button lg:hidden">Open drawer</label>

            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 w-80 bg-gradient-to-r from-cyan-300 to-blue-400 text-base-content">
                    {
                        admin ? <li><Link to='/dashboard'>Users</Link></li> : <li><Link to='/dashboard'>My Profile</Link></li>
                    }

                    {
                        !admin && <li><Link to='/dashboard/mycourse'>My Courses</Link></li>
                    }
                    {
                        admin && <li><Link to='/dashboard/attc'> Students Attendence</Link></li>
                    }
                    {
                        admin && <li><Link to='/dashboard/feedbk'>Students Feedback</Link></li>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;