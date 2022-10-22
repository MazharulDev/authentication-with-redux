import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ImgSection from './imgSection/ImgSection';

const Home = () => {
    const [locations, setLocations] = useState({})
    useEffect(() => {
        fetch(`https://geolocation-db.com/json/${process.env.REACT_APP_LOCATION_API}`)
            .then(res => res.json())
            .then(data => setLocations(data))
    }, [])
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
        <div>
            <div className='border-b-2 border-blue-200'>
                <div className='flex justify-between items-center mx-5 p-3'>
                    <div>
                        <h2 className='text-xl font-bold border-t-4 border-l-4 border-blue-600 p-2'>Authentication</h2>
                    </div>
                    <div className='text-center'>
                        <h2>{locations?.city}</h2>
                        <h2>{locations?.country_name}</h2>
                    </div>
                    <div className='flex justify-center items-center gap-3'>
                        {
                            users.map(user => <p className='text-lg font-bold text-blue-600'>{user.userName}</p>)
                        }
                        <button onClick={handleLogout} className='py-1 px-3 bg-red-600 rounded-md text-white hover:bg-red-500'>Logout</button>
                    </div>
                </div>
            </div>
            <div className='mx-5 mt-3'>
                <ImgSection />
            </div>
        </div>
    );
};

export default Home;