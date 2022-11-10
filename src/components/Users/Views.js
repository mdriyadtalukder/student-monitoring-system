import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Views = () => {
    const param = useParams();
    const [da, setDa] = useState([])
    let count=1;
    const [reload, setReload] = useState(false);
    const navigation = useNavigate();

    useEffect(() => {
        fetch(`https://student-monitoring-system-server.onrender.com/cms?email=${param.viewID}`)
            .then(res => res.json())
            .then(data => setDa(data))
    }, [da])

    return (
        <div class="w-full h-full">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Semseter</th>
                        <th>ID</th>
                        <th>Course Code</th>
                        <th>Course Name</th>
                        <th>Practicle Marks</th>
                        <th>Theory Marks</th>
                        <th>Total Marks</th>
                        <th>Edit Marks</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        da?.map(d => <tr>
                            <td>{count++}</td>
                            <td>{d?.semesters ? d?.semesters : 'Not Assign Yet'}</td>
                            <td>{d?._id ? d?._id : 'Not Assign Yet'}</td>
                            <td>{d?.code ? d?.code : 'Not Assign Yet'}</td>
                            <td>{d?.sub ? d?.sub : 'Not Assign Yet'}</td>
                            <td>{d?.prac ? d?.prac : 'Not Assign Yet'}</td>
                            <td>{d?.theory ? d?.theory :'Not Assign Yet'}</td>
                            <td>{d?.totals ? d?.totals : 'Not Assign Yet'}</td>
                            <td><button onClick={() => {
                                const path = `/dashboardss/${d?._id}`
                                navigation(path)
                            }}>Edit</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Views;