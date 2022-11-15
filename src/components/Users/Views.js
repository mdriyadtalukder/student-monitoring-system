import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Views = () => {
    const param = useParams();
    const [da, setDa] = useState([])
    let count = 1;
    const [reload, setReload] = useState(true);
    const navigation = useNavigate();

    useEffect(() => {
        fetch(`https://student-monitoring-system-server.onrender.com/cms?email=${param.viewID}`)
            .then(res => res.json())
            .then(data => {
                setDa(data)
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
                    <div class="w-full h-full  bg-gradient-to-r from-cyan-200 to-blue-200">
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
                                        <td>{d?.theory ? d?.theory : 'Not Assign Yet'}</td>
                                        <td>{d?.totals ? d?.totals : 'Not Assign Yet'}</td>
                                        <td><button className='btn btn-info' onClick={() => {
                                            const path = `/dashboardss/${d?._id}`
                                            navigation(path)
                                        }}>Edit</button></td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
            }
        </>
    );
};

export default Views;