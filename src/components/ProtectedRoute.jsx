import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import ChatRoom from "../pages/ChatRoom";
import Login from "../pages/Login";
import Spinner from "./Spinner";

function ProtectedRoute() {
    const currentUser = useContext(AuthContext);
    const {loading}=useContext(AuthContext);
  
    // Check if the user is logged in
    if(loading){
        return <Spinner/>
    }
    else if (currentUser) {
      // Render the ChatRoom component if logged in
      return <ChatRoom />;
    } else {
      // Redirect to the login page if not logged in
      return <Login />;
    }
  }
  
  export default ProtectedRoute;