import { useEffect } from "react";
import { supabase } from "../lib/helper/supabaseClient";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsDiscord } from "react-icons/bs";
import LoginForm from "../components/Forms/LoginForm";
import { signInThirdParty } from "../api/auth";
const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.onAuthStateChange((event) => {
      if (event == "SIGNED_IN") {
        navigate("/success");
      } else {
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen mx-auto">
      {/* Modal */}
      <div className="w-[475px] bg-base-100 p-6 rounded-xl shadow-lg">
        <div className="mb-6 text-center">
          <h1 className="mb-2 text-2xl font-semibold ">Welcome</h1>
          <h2 className="text-lg">Please enter your details to sign in.</h2>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => signInThirdParty("google")}
            className="flex-1 capitalize border-base-300 btn btn-ghost">
            <FcGoogle size="22px" />
            Google
          </button>
          <button
            onClick={() => signInThirdParty("discord")}
            className="flex-1 capitalize border-base-300 btn btn-ghost">
            <BsDiscord size="22px" />
            Discord
          </button>
        </div>
        <div className="my-5 text-sm font-medium divider">or</div>
        <LoginForm />
        {/* TODO forgot password? */}
        <div className="mt-4 text-sm text-center">
          Don't have an account?{" "}
          <span className="font-semibold link text-accent">Create account</span>
        </div>
      </div>
      {/* Modal */}
    </div>
  );
};

export default Login;
