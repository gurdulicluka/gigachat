import LoginModal from "../components/Modal/LoginModal";
import SignUpModal from "../components/Modal/SignUpModal";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/helper/supabaseClient";

const Login = () => {
  const [isMember, setIsMember] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("useEffect LOGIN PAGE");
    // if session active -> redirect to protected route
    supabase.auth.getSession().then((response) => {
      if (response.data.session) {
        console.log("Already logged in, redirecting..");
        navigate("/success");
      }
    });
    // if user logs in successfully -> redirect to protected route
    supabase.auth.onAuthStateChange(async (event) => {
      console.log("Auth event is", event);
      event === "SIGNED_IN" && navigate("/success");
    });
  }, []);

  return (
    <div className="flex items-center justify-center h-[100svh] mx-auto">
      {isMember ? (
        <LoginModal setIsMember={setIsMember} />
      ) : (
        <SignUpModal setIsMember={setIsMember} />
      )}
    </div>
  );
};

export default Login;
