import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider,onAuthStateChanged,signInWithPopup, signOut } from "firebase/auth";
import {auth} from '../firebase'

// Create context
export const AuthContext = createContext();

// Context provider
export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  //signin with google
  const  signInWithGoogle=async ()=>{
    setLoading(true);
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    setLoading(false);
  }

  //logout
  const logOut=async()=>{
    setLoading(true);
    signOut(auth);
    setLoading(false);
  }
  //loading
  const [loading,setLoading]=useState(false);

  //set current user
  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,(user)=>{
        if(auth)
        setCurrentUser(user);
        else
        setCurrentUser(null);
    });
    return unsubscribe;
  },[]);

  //current local time
  const [currentTime, setCurrentTime] = useState(new Date());

  //use effect for local current time updation
  useEffect(()=>{
    setInterval(()=>{
      setCurrentTime(new Date());
    },1000)
  },[])

  const value = {
    currentUser,
    setCurrentUser,
    signInWithGoogle,
    logOut,
    loading,
    setLoading,
    currentTime
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

