import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import img from '../../img/imgg.png'

const Header = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const signout = () => {
        signOut(auth);
        // navigate('/login');
    }
    return (
        <div class="navbar bg-gradient-to-r from-cyan-500 to-blue-500 ">
            <div class="navbar-start">
                <Link to='/' class="btn btn-ghost normal-case text-xl"><label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img src={img} />
                    </div>
                </label></Link>
            </div>
            <div class="navbar-end">
                <Link id='idd' to='/dashboard' class="btn bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-cyan-400 hover:to-blue-500">Dashboard</Link>
                {
                    user ? <Link onClick={signout} id='idd' class="btn bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-cyan-400 hover:to-blue-500 ml-2">Sign Out</Link> : <Link to='/login' id='idd' class="ml-2 btn bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-cyan-400 hover:to-blue-500">Log In</Link>

                }
            </div>
        </div>
    );
};

export default Header;

