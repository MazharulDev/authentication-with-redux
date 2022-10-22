import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate()
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    const handleLogout = () => {
        dispatch({
            type: 'LOGOUT'
        })
        navigate("/signup")
    }
    return (
        <div className='border-b-2 border-blue-200'>
            <div className='flex justify-between items-center mx-5 p-3'>
                <div>
                    <h2 className='text-xl font-bold border-t-4 border-l-4 border-blue-600 p-2'>Authentication</h2>
                </div>
                <div className='flex justify-center items-center gap-3'>
                    {
                        users.map(user => <p className='text-lg font-bold text-blue-600'>{user.userName}</p>)
                    }
                    <button onClick={handleLogout} className='py-1 px-3 bg-red-600 rounded-md text-white hover:bg-red-500'>Logout</button>
                </div>
            </div>
        </div>
    );
};

export default Home;