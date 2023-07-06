import React, { useEffect } from "react";
import { supabase } from "../lib/helper/supabaseClient";
import { useNavigate } from "react-router-dom";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";

const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_IN") {
        navigate("/success");
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="w-[95%] mx-auto max-w-[700px] h-screen flex items-center justify-center">
      <Auth
        supabaseClient={supabase}
        theme="dark"
        providers={["discord", "google", "github"]}
        appearance={{ theme: ThemeSupa }}
      />
    </div>
  );
};

export default Login;
