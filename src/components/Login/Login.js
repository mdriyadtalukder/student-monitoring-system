import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
    const emailInput = useRef('');
    const passwordInput = useRef('');
    const navigate = useNavigate();
    let location = useLocation();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, error1] = useSendPasswordResetEmail(auth);
    let from = location.state?.from?.pathname || "/";
    let errors;
    if (error) {
        errors = <p className='text-danger block text-sm text-error font-bold text-center'>Incorrect email or password</p>
    }
    if (loading || sending) {
        return <div class="absolute right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 ">
            <div class="border-t-transparent border-solid animate-spin  rounded-full border-info border-4 h-16 w-16"></div>
        </div>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const login = event => {
        event.preventDefault();
        const email = emailInput.current.value;
        const password = passwordInput.current.value;
        signInWithEmailAndPassword(email, password);
        console.log(email)

    }
    const forgetPassword = async () => {
        const email = emailInput.current.value;
        await sendPasswordResetEmail(email);
        if (email) {
            toast('Sent email');
        }
        else if (error1 || !email) {
            toast.error('please enter your email');

        }
    }
    return (

        <div className='flex h-screen justify-center items-center'>
            <div class="bg-white shadow-lg rounded px-20 pt-16 pb-20 mb-12">
                <form onSubmit={login}>
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
                    {errors}
                    <button class="w-full btn btn-info mt-3.5 mb-3.5">Log In</button>
                </form>
                <div className="text-center pt-2">
                    <button onClick={forgetPassword} className='btn-white text-info font-bold'>Forget password?</button>
                </div>
                <Link to='/signup'>Sing Up</Link>
            </div>
            <ToastContainer ></ToastContainer>
        </div>
    );
};

export default Login;