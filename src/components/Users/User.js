import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const User = () => {
    const [datas, setData] = useState([])
    const navigation = useNavigate();
    const [loading, setloading] = useState(true);
    let count = 1;
    useEffect(() => {
        fetch('https://student-monitoring-system-server.onrender.com/users')
            .then(res => res.json())
            .then(data => {
                setData(data)
                setloading(false);
            }

            )
    })
    console.log(datas)

    return (
        <>
            {
                loading ? <div className='flex h-screen justify-center items-center bg-gradient-to-r from-cyan-200 to-blue-200'>
                    <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
                        <div class="border-t-transparent border-solid animate-spin  rounded-full border-info border-4 h-16 w-16"></div>
                    </div>
                </div> :
                    <div class="w-full h-full">
                        <table class="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Add Courses</th>
                                    <th>View Courses</th>
                                    <th>Profile</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    datas?.map(d => <tr>
                                        <th>{count++}</th>
                                        <td>{d?.name}</td>
                                        <td>{d?.email}</td>
                                        <td>{d?.role}</td>
                                        <td>{
                                            d?.role == 'Student' && <button className='btn btn-info' onClick={() => {
                                                const path = `/dashboard/${d?.email}`
                                                navigation(path)
                                            }}>Add</button>
                                        }</td>
                                        <td>{
                                            d?.role == 'Student' && <button className='btn btn-info' onClick={() => {
                                                const path = `/dashboards/${d?.email}`
                                                navigation(path)
                                            }}>View</button>
                                        }</td>
                                        <td>{
                                            d?.role == 'Student' && <button className='btn btn-info' onClick={() => {
                                                const path = `/dashboardp/${d?.email}`
                                                navigation(path)
                                            }}>My Profile</button>
                                        }</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </>
    );
};

export default User;