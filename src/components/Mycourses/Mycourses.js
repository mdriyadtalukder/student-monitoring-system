import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Mycourses = () => {
    const [user] = useAuthState(auth);
    const [da, setDa] = useState([])
    let count = 1;
    const [reload, setReload] = useState(false);

    useEffect(() => {
        fetch(`https://student-monitoring-system-server.onrender.com/cms?email=${user?.email}`)
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
                        <th>Course Code</th>
                        <th>Course Name</th>
                        <th>Practicle Marks</th>
                        <th>Theory Marks</th>
                        <th>Total Marks</th>
                        <th>Course Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        da?.map(d => <tr>
                            <td>{count++}</td>
                            <td>{d?.semesters ? d?.semesters : 'Not Assign Yet'}</td>
                            <td>{d?.code ? d?.code : 'Not Assign Yet'}</td>
                            <td>{d?.sub ? d?.sub : 'Not Assign Yet'}</td>
                            <td>{d?.prac ? d?.prac : 'Not Assign Yet'}</td>
                            <td>{d?.theory ? d?.theory : 'Not Assign Yet'}</td>
                            <td>{d?.totals ? d?.totals : 'Not Assign Yet'}</td>
                            <td>
                                {
                                    (d?.prac && d?.theory && d?.totals) ? <p className='text-green-500	font-bold'>Complete Courses</p> : <p className='text-rose-500 font-bold'>Incomplete Course</p>
                                }
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Mycourses;