import axios from 'axios';
import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';

const Edit = () => {
    const [user] = useAuthState(auth);
    const fname = useRef('');
    const mname = useRef('');
    const gen = useRef('');
    const con = useRef('');
    const caddress = useRef('');
    const paddress = useRef('');
    const bday = useRef('');
    const [reload, setReload] = useState(true);


    const edits = event => {
        event.preventDefault();
        const name = user.displayName;
        const father = fname.current.value;
        const mother = mname.current.value;
        const gender = gen.current.value;
        const contact = con.current.value;
        const currentAddress = caddress.current.value;
        const permanantAddress = paddress.current.value;
        const email = user.email;
        const birthday = bday.current.value;
        if (father || mother || gender || contact || currentAddress || permanantAddress || birthday) {
            const infos = {
                name: name,
                fName: father,
                mName: mother,
                geender: gender,
                contactN: contact,
                cAddress: currentAddress,
                pAddress: permanantAddress,
                email: email,
                bDay: birthday
            }
            fetch(`https://student-monitoring-system-server.onrender.com/info/${user?.email}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(infos),
            }, [reload])
                .then(response => response.json())


                .then(data => {
                    toast('successfully updated!!!');
                    event.target.reset();
                    setReload(false);
                })
        }
        else {
            toast('Please fill up a information field!!!');

        }
        console.log(user)
    }
    return (


        <>
            {
                !user?.email ? <div className='flex h-screen justify-center items-center bg-gradient-to-r from-cyan-200 to-blue-200'>
                    <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
                        <div class="border-t-transparent border-solid animate-spin  rounded-full border-info border-4 h-16 w-16"></div>
                    </div>
                </div> :
                    <div className='flex h-screen justify-center items-center  bg-gradient-to-r from-cyan-200 to-blue-200 '>

                        <form onSubmit={edits} className='bg-white shadow-lg rounded w-9/12	'>
                            <div class="overflow-hidden shadow sm:rounded-md">
                                <div class="bg-white px-4 py-5 sm:p-6">
                                    <div class="grid grid-cols-6 gap-6">
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="first-name" class="block text-sm font-medium text-gray-700">Enter Name</label>
                                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder={user?.displayName} readOnly />

                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="last-name" class="block text-sm font-medium text-gray-700">Enter Father's Name</label>
                                            <input ref={fname} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Enter Father's Name" />

                                        </div>

                                        <div class="col-span-6 sm:col-span-4">
                                            <label for="email-address" class="block text-sm font-medium text-gray-700">Enter Mother's Name</label>
                                            <input ref={mname} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Enter  Mother's Name" />

                                        </div>

                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="country" class="block text-sm font-medium text-gray-700">Enter Gender</label>
                                            <input ref={gen} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Enter Gender" />

                                        </div>
                                        <div class="col-span-6 sm:col-span-3">
                                            <label for="country" class="block text-sm font-medium text-gray-700">Enter Contact No.</label>
                                            <input ref={con} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Enter  Contact No." />

                                        </div>

                                        <div class="col-span-6">
                                            <label for="street-address" class="block text-sm font-medium text-gray-700">Enter Current Address</label>
                                            <input ref={caddress} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Enter Current Address" />

                                        </div>

                                        <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                                            <label for="city" class="block text-sm font-medium text-gray-700">Enter Permanant Address</label>
                                            <input ref={paddress} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Enter Permanant Address" />

                                        </div>

                                        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label for="region" class="block text-sm font-medium text-gray-700">Enter Email</label>
                                            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder={user?.email} readOnly />

                                        </div>

                                        <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                                            <label for="postal-code" class="block text-sm font-medium text-gray-700">Enter Birthday</label>
                                            <input ref={bday} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Enter Birthday" />

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

export default Edit;