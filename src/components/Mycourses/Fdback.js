import React, { useRef, useState, useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Fdback = () => {
    const param = useParams();
    const [user] = useAuthState(auth);
    const [users, setUsers] = useState([]);
    const [reload, setReload] = useState(false);
    const [loading1, setloading1] = useState(true);
    const dat = useRef('');


    useEffect(() => {

        fetch(`https://student-monitoring-system-server.onrender.com/cms/${param.fdID}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setUsers(data);
                setloading1(false);

            })


    }, [users])
    const fdbck = event => {
        event.preventDefault();
        const smester = users?.semesters;
        const codes = users?.code;
        const subs = users?.sub;
        const feedbk = event.target.option.value;
        const datee = dat.current.value;
        const emaill = user?.email;

        if (datee && feedbk) {
            const infos = {
                semester: smester,
                code: codes,
                sub: subs,
                feedbacks: feedbk,
                date: datee,
                email: emaill,
            }
            axios.post('https://student-monitoring-system-server.onrender.com/fdb', infos)
                .then(res => {
                    toast('Add feedback successfully!!!');
                    event.target.reset();
                    setReload(!reload);
                })
        }
        else {
            toast.error('please try again');

        }
    }
    return (


        <>
            {
                !user?.email ? <div className='flex h-screen justify-center items-center bg-gradient-to-r from-cyan-200 to-blue-200'>
                    <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
                        <div class="border-t-transparent border-solid animate-spin  rounded-full border-info border-4 h-16 w-16"></div>
                    </div>
                </div> :
                    <div className='flex h-screen justify-center items-center  bg-gradient-to-r from-cyan-200 to-blue-200'>

                        <form onSubmit={fdbck} className='bg-white shadow-lg rounded w-9/12	'>
                            <div class="overflow-hidden shadow sm:rounded-md">
                                <div class="bg-white px-4 py-5 sm:p-6">
                                    <div class="grid grid-cols-6 gap-6">

                                        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label for="region" class="block text-sm font-medium text-gray-700">Your Email</label>
                                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder={user?.email} readOnly />

                                        </div>
                                        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label for="region" class="block text-sm font-medium text-gray-700">Enter Date</label>
                                            <input ref={dat} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" />

                                        </div>

                                        <div class="mb-6 relative">
                                            <label class=" text-gray-700 text-sm font-bold mb-2" for="password">
                                                How was this course?
                                            </label>
                                            <select name='option' class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                                                <option>Outstanding</option>
                                                <option>Excellent</option>
                                                <option>Very Good</option>
                                                <option>Good</option>
                                                <option>Satisfactory</option>
                                                <option>Above Average</option>
                                                <option>Average</option>
                                                <option>Bellow Average</option>

                                            </select>
                                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center">
                                <button class="w-1/6 btn btn-info mt-3.5 mb-3.5">Save</button>

                            </div>
                        </form>
                        <ToastContainer ></ToastContainer>
                    </div>
            }
        </>

    );
};

export default Fdback;