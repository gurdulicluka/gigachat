import LoginModal from "../components/LoginModal";
import SignUpModal from "../components/SignUpModal";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/helper/supabaseClient";

const Login = () => {
  const [isMember, setIsMember] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange(async (event) => {
      console.log(event);
      if (event == "SIGNED_IN") {
        navigate("/success");
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen mx-auto">
      {/* TODO reveal password while typing , eye icon inside of input fields */}
      {isMember ? (
        <LoginModal setIsMember={setIsMember} />
      ) : (
        <SignUpModal setIsMember={setIsMember} />
      )}
    </div>
  );
};

export default Login;
