import { async } from '@firebase/util';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import img from '../../img/signin.png'

const Signup = () => {
    const emailInput = useRef('');
    const nameInput = useRef('');
    const passwordInput = useRef('');
    const navigate = useNavigate();
    // const [da, setDa] = useState([])
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    let errors;
    // useEffect(() => {
    //     fetch('review.json')
    //         .then(res => res.json())
    //         .then(data => setDa(data))
    // }, [])
    if (error || error1) {
        errors = <p className='text-danger block text-sm text-error font-bold text-center'>Find some errors! try again</p>
    }
    if (loading || updating) {
        return <div className='flex h-screen justify-center items-center bg-gradient-to-r from-cyan-200 to-blue-200'>
            <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
                <div class="border-t-transparent border-solid animate-spin  rounded-full border-info border-4 h-16 w-16"></div>
            </div>
        </div>

    }
    if (user) {
        navigate('/');
    }


    // let myFunction = async () => {
    //     for (var j = 0; j <= da?.length; j++) {
    //         if (da[j]?.email && da[j]?.name) {
    //             await createUserWithEmailAndPassword(da[j]?.email, "123456");
    //             await updateProfile({ displayName: da[j]?.name });
    //         }
    //         else {
    //             console.log('not')
    //         }
    //     }
    // }
    // myFunction()

    const signup = async (event) => {
        event.preventDefault();
        const email = emailInput.current.value;
        const name = nameInput.current.value;
        const password = passwordInput.current.value;
        const role = event.target.option.value;
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        const users = {
            name: name,
            email: email,
            role: role
        }
        axios.post('https://student-monitoring-system-server.onrender.com/users', users)
            .then(res => {
                console.log(res)
            })
        console.log(role)

    }

    return (
        <div className='flex h-screen justify-center items-center bg-gradient-to-r from-cyan-200 to-blue-200'>
            <div class="bg-white shadow-lg rounded px-20 pt-16 pb-20 mb-12">
                <form onSubmit={signup}>
                    <div class="mb-4">
                        <label class=" text-gray-700 text-sm font-bold mb-2" for="name">
                            Name
                        </label>
                        <input ref={nameInput} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Enter Name" />
                    </div>
                    <div class="mb-4">
                        <label class=" text-gray-700 text-sm font-bold mb-2" for="email">
                            Email
                        </label>
                        <input ref={emailInput} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Enter Email" />
                    </div>
                    <div class="mb-6">
                        <label class=" text-gray-700 text-sm font-bold mb-2" for="password">
                            Password
                        </label>
                        <input ref={passwordInput} class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Enter Password" />
                    </div>
                    <div class="mb-6 relative">
                        <label class=" text-gray-700 text-sm font-bold mb-2" for="password">
                            Role
                        </label>
                        <select name='option' class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>Admin</option>
                            <option>Student</option>

                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                        </div>
                    </div>
                    {errors}
                    <button id='idd' class="w-full btn bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-cyan-400 hover:to-blue-500 mt-3.5 mb-3.5">Sign Up</button>
                </form>
            </div>
            <div>
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default Signup;