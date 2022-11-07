import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Myprofile = () => {
    const [user] = useAuthState(auth);
    const [users, setUsers] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() => {
        fetch(`http://localhost:5000/info?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setloading(false);
            })

    }, [users])

    return (
        <div class="bg-white p-3 shadow-sm rounded-sm w-full h-full" id='bgc'>
            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                </span>
                <span class="tracking-wide">About</span>
            </div>
            <div class="text-gray-700">
                <div class="grid md:grid-cols-2 text-sm">
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Name</div>
                        <div class="px-4 py-2">{user.displayName ? user?.displayName : 'Please Set Your Name'}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Father's Name</div>
                        <div class="px-4 py-2">{users[0]?.fName ? users[0]?.fName : 'Please Set Your Fathers Name'}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Mother's Name</div>
                        <div class="px-4 py-2"> <div class="px-4 py-2">{users[0]?.mName ? users[0]?.mName : 'Please Set Your Mothers Name'}</div>
                        </div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Gender</div>
                        <div class="px-4 py-2">{users[0]?.geender ? users[0]?.geender : 'Please Set Your Gender'}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Contact No.</div>
                        <div class="px-4 py-2">{users[0]?.contactN ? users[0]?.contactN : 'Please Set Your Gender'}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Current Address</div>
                        <div class="px-4 py-2">{users[0]?.cAddress ? users[0]?.cAddress : 'Please Set Your Gender'}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Permanant Address</div>
                        <div class="px-4 py-2">{users[0]?.pAddress ? users[0]?.pAddress : 'Please Set Your Gender'}</div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Email.</div>
                        <div class="px-4 py-2">
                            <a class="text-blue-800" href="mailto:jane@example.com">{user.email ? user.email : 'Please Set Your Gender'}</a>
                        </div>
                    </div>
                    <div class="grid grid-cols-2">
                        <div class="px-4 py-2 font-semibold">Birthday</div>
                        <div class="px-4 py-2">{users[0]?.bDay ? users[0]?.bDay : 'Please Set Your Gender'}</div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <Link to='/edit' className='btn btn-info mt-12'>Set Your Profile</Link>
                <Link to='/edit' className='btn btn-info mt-12 ml-6'>Edit Profile</Link>
            </div>
        </div>
    );
};

export default Myprofile;