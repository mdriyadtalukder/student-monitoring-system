import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

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
                <Link to='/' class="btn btn-ghost normal-case text-xl">daisyUI</Link>
            </div>
            <div class="navbar-end">
                <Link to='/' class="btn">Dashboard</Link>
                {
                    user ? <Link onClick={signout} class="btn">Sign Out</Link> : <Link to='/login' class="btn">Log In</Link>

                }
            </div>
        </div>
    );
};

export default Header;