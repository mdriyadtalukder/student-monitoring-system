import React from 'react';
import img from '../../img/imgg.png'
import './Home.css'

const Home = () => {
    return (

        <div className='flex h-screen justify-center items-center text-center bg-sky-200'>
            <div class=" px-20 pt-16 pb-20 mb-12">
                <div id='im' >
                    <img className='w-96' src={img} alt="" />
                </div> 
                <h1 className='text-5xl font-bold pt-4 text-sky-400'>Welcome to Student Monitoring System</h1>
            </div>

        </div>
    );
};

export default Home;