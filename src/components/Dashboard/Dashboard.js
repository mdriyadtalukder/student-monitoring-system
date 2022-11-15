import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../useAdmin/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin, load] = useAdmin(user);
    const [datas, setData] = useState([])
    const [loading, setloading] = useState(true);
    console.log(admin)
    return (
        <>
            {
                load ? <div className='flex h-screen justify-center items-center bg-gradient-to-r from-cyan-200 to-blue-200'>
                    <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
                        <div class="border-t-transparent border-solid animate-spin  rounded-full border-info border-4 h-16 w-16"></div>
                    </div>
                </div> :
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
            }
        </>
    );
};

export default Dashboard;