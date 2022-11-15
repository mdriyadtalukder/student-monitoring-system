import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Feedback = () => {
    const [datas, setData] = useState([])
    let count = 1;
    useEffect(() => {
        fetch('https://student-monitoring-system-server.onrender.com/fdb')
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
                        <th>Email</th>
                        <th>Semester</th>
                        <th>Course Code</th>
                        <th>Course Title</th>
                        <th>Date</th>
                        <th>Student Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        datas?.map(d => <tr>
                            <th>{count++}</th>
                            <td>{d?.email}</td>
                            <td>{d?.semester}</td>
                            <td>{d?.code}</td>
                            <td>{d?.sub}</td>
                            <td>{d?.date}</td>
                            <td>{d?.feedbacks}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Feedback;