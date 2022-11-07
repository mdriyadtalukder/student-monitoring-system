import React, { useEffect, useState } from 'react';
const User = () => {
    const [datas, setData] = useState([])
    let count=1;
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setData(data))
    })

    return (
        <div class="w-full h-full">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datas?.map(d => <tr>
                            <th>{count++}</th>
                            <td>{d?.name}</td>
                            <td>{d?.email}</td>
                            <td>{d?.role}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default User;