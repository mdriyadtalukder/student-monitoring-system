import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';

const Mycourses = () => {
    const [user] = useAuthState(auth);
    const [da, setDa] = useState([])
    const navigation = useNavigate();
    let count = 1;
    const [reload, setReload] = useState(true);

    useEffect(() => {
        fetch(`https://student-monitoring-system-server.onrender.com/cms?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setDa(data);
                setReload(false)
            })
    }, [da])
    return (
        <>
            {
                reload ? <div className='flex h-screen justify-center items-center bg-gradient-to-r from-cyan-200 to-blue-200'>
                    <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
                        <div class="border-t-transparent border-solid animate-spin  rounded-full border-info border-4 h-16 w-16"></div>
                    </div>
                </div> :
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
                                    <th>Attendance</th>
                                    <th>FeedBack</th>
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
                                        <td>
                                            {
                                                (d?.prac && d?.theory && d?.totals) ? '' :
                                                    <button className='btn btn-info' onClick={() => {
                                                        const path = `/dashboard/attend/${d?._id}`
                                                        navigation(path)
                                                    }}>Attendance</button>

                                            }
                                        </td>
                                        <td>
                                            {
                                                (d?.prac && d?.theory && d?.totals) ? <button className='btn btn-info' onClick={() => {
                                                    const path = `/dashboard/feedb/${d?._id}`
                                                    navigation(path)
                                                }}>Feedback</button> : ''
                                            }

                                        </td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </>
    );
};

export default Mycourses;