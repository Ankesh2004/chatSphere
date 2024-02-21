import React, { useEffect } from 'react'
import { useContext } from 'react'
import {AuthContext} from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate=useNavigate();
    const {currentUser,signInWithGoogle}=useContext(AuthContext);
    // console.log(currentUser);
    const handleLogIn=()=>{
        try{
            signInWithGoogle();
        }
        catch(e){
            console.log('Error occured');
            console.log(e);
        }
    }
    useEffect(()=>{
        if(currentUser){
            navigate('/chatroom');
        }
        else{
            navigate('/');
        }
    },[currentUser]);
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-vector/dialogue-chat-clouds-speech-bubble-icon-from-lines-triangles-particle-style-design-low-poly-technology-devices-people-communication-concept-blue-background_587448-471.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-white">👋 Hello there! </h1>
                        <p className="mb-5 text-white">We're excited to have you join our vibrant community of chat enthusiasts. Whether you're here to catch up with friends or make new ones, you're in for a great experience.</p>
                        <button className="btn btn-primary"
                        onClick={handleLogIn}>
                            <img className='w-[3rem]' src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
                            <p className='text-white'>Login with Google</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login