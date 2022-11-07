import React, { useRef, useState } from 'react';
// import { addDoc, collection, doc, setDoc } from "firebase/firestore";
// import auth, { db } from '../../firebase.init';
// import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Addusers = () => {
    const emailInput = useRef('');
    const nameInput = useRef('');
    const passwordInput = useRef('');
    const [reload, setReload] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);

    const addUsers = async (event) => {
        event.preventDefault();
        const email = emailInput.current.value;
        const name = nameInput.current.value;
        const password = passwordInput.current.value;
        if (name && email && password) {
            // const res = await createUserWithEmailAndPassword(
            //     auth,
            //     email, password
            // )
            // await setDoc(doc(db, "users", res.user.uid), {
            //     name: name,
            //     email: email,
            //     password: password,
            //     state: "Dhaka",
            //     country: "Bangladesh"
            // });
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName: name });
            signOut(auth)
            const users = {
                name: name,
                email: email
            }
            axios.post('http://localhost:5000/users', users)
                .then(res => {
                    console.log(res)
                })
            toast('User successfully added!!!');
            event.target.reset();
            setReload(!reload);
        }
        else {
            toast('Please enter the all input field')
        }
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="bg-white shadow-lg rounded px-20 pt-16 pb-20 mb-12">
                <form onSubmit={addUsers}>
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
                    <button class="w-full btn btn-info mt-3.5 mb-3.5">Add User</button>
                </form>
                <ToastContainer ></ToastContainer>
            </div>
        </div>
    );
};

export default Addusers;