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
        <div class="navbar bg-info ">
            <div class="navbar-start">
                <Link to='/' class="btn btn-ghost normal-case text-xl"><label tabindex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                        <img src={img} />
                    </div>
                </label></Link>
            </div>
            <div class="navbar-end">
                <Link to='/dashboard' class="btn btn-primary">Dashboard</Link>
                {
                    user ? <Link onClick={signout} class="btn btn-primary ml-2">Sign Out</Link> : <Link to='/login' class="ml-2 btn btn-primary">Log In</Link>

                }
            </div>
        </div>
    );
};

export default Header;