import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Attendence = () => {
    const [datas, setData] = useState([]);
    const [loading, setloading] = useState(true);

    let count = 1;
    useEffect(() => {
        fetch('https://student-monitoring-system-server.onrender.com/atc')
            .then(res => res.json())
            .then(data => {
                setData(data);
                setloading(false);
            })
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
                                    <th>Email</th>
                                    <th>Semester</th>
                                    <th>Course Code</th>
                                    <th>Course Title</th>
                                    <th>Date</th>
                                    <th>Attendence Status</th>
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
                                        <td>{
                                            d?.attend == 'Present' ? <p className='text-green-500	font-bold'> {d?.attend}</p> :
                                                <p className='text-rose-500	font-bold'> {d?.attend}</p>

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

export default Attendence;