import React from 'react';
import {Link} from 'react-router-dom'
import MainLayout from '../layouts/MainLayout';

const HomePage = () => {
    return (
    <MainLayout>
         <div className='bg-light p-5 mt-4 rounded-3'>
                <h1>Welcome to Genesis POS</h1>
                <p>For any issues contact 0718788296</p> 
                <Link to="/pos" className='btn btn-primary'>Click here to sell</Link> 
            </div>
    </MainLayout>
    );
}

export default HomePage;
