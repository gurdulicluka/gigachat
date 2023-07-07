import React, { useEffect } from "react";
import { supabase } from "../lib/helper/supabaseClient";
import { useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (event == "SIGNED_IN") {
        console.log("SIGNED_IN", session);
        navigate("/success");
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen mx-auto">
      <Auth
        supabaseClient={supabase}
        theme="dark"
        providers={["discord", "google"]}
        appearance={{ theme: ThemeSupa }}
      />
    </div>
  );
};

export default Login;
