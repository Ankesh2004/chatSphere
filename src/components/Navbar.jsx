import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const {logOut}=useContext(AuthContext);
    const navigate=useNavigate();

    const handleLogOut=async()=>{
        try{
            navigate('/');
            await logOut();
        }
        catch(error){
            console.log(error);
        }
    }
    return (
        <div className=' navbar bg-base-100 flex justify-around align-middle relative'>
            <a className="btn btn-ghost text-xl">Chat Sphere</a>
            <button onClick={handleLogOut} className="btn">Logout</button>
        </div>
    )
}

export default Navbar