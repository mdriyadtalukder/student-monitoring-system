import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const User = () => {
    const [datas, setData] = useState([])
    const navigation = useNavigate();
    let count = 1;
    useEffect(() => {
        fetch('https://student-monitoring-system-server.onrender.com/users')
            .then(res => res.json())
            .then(data => setData(data))
    })
    console.log(datas)

    return (
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
                                d?.role == 'Student' && <button  className='btn btn-info' onClick={() => {
                                    const path = `/dashboards/${d?.email}`
                                    navigation(path)
                                }}>View</button>
                            }</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default User;