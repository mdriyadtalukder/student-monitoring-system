import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const Child = () => {
    const param = useParams();
    const sem = useRef('');
    const sname = useRef('');
    const pm = useRef('');
    const thm = useRef('');
    const tm = useRef('');
    const cd = useRef('');
    const [da, setDa] = useState([])
    const [reload, setReload] = useState(false);
    useEffect(() => {
        fetch(`https://student-monitoring-system-server.onrender.com/user?email=${param.userID}`)
            .then(res => res.json())
            .then(data => setDa(data))
    }, [da])
    const add = event => {
        event.preventDefault();
        const semester = sem.current.value;
        const code = cd.current.value;
        const subject = sname.current.value;
        const pmark = pm.current.value;
        const thmarks = thm.current.value;
        const total = tm.current.value;
        if (subject || pmark || thmarks || total || code || semester) {
            const coum = {
                email: da[0]?.email,
                semesters: semester,
                code: code,
                sub: subject,
                prac: pmark,
                theory: thmarks,
                totals: total

            }
            axios.post('http://localhost:5000/cms', coum)
                .then(res => {
                    toast('Information successfully added!!!');
                    event.target.reset();
                    setReload(!reload);
                })
        }
        else {
            toast('please fill the field!!!');

        }
    }
    return (
        <div className='flex h-screen justify-center items-center'>
            <form onSubmit={add} className='class="bg-white shadow-lg rounded w-9/12	'>
                <div class="overflow-hidden shadow sm:rounded-md">
                    <div class="bg-white px-4 py-5 sm:p-6">
                        <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label for="postal-code" class="block text-sm font-medium text-gray-700">Courses or marks Add For below email</label>
                                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder={da[0]?.email} readOnly />

                            </div>
                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label for="postal-code" class="block text-sm font-medium text-gray-700">Enter Semester</label>
                                <input ref={sem} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder='Enter Semester' />

                            </div>
                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label for="postal-code" class="block text-sm font-medium text-gray-700">Enter Course Code</label>
                                <input ref={cd} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder='Enter Course Coder' />

                            </div>
                            <div class="col-span-6">
                                <label for="street-address" class="block text-sm font-medium text-gray-700">Enter Course Name</label>
                                <input ref={sname} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Enter Current Address" />

                            </div>
                            <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                <label for="city" class="block text-sm font-medium text-gray-700">Enter Practicle Marks</label>
                                <input ref={pm} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Enter Practicle marks" />

                            </div>

                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label for="region" class="block text-sm font-medium text-gray-700">Enter Theory Marks</label>
                                <input ref={thm} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder='Enter Theory Marks' />

                            </div>

                            <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                <label for="postal-code" class="block text-sm font-medium text-gray-700">Enter Total Marks</label>
                                <input ref={tm} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Enter Total Marks" />

                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <button class="w-1/6 btn btn-info mt-3.5 mb-3.5">Add</button>

                </div>
            </form>
            <ToastContainer ></ToastContainer>

        </div>
    );
};

export default Child;