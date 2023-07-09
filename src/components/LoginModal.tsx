import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BsDiscord } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

import { supabase } from "../lib/helper/supabaseClient";

import LoginForm from "../components/Forms/LoginForm";
import ProviderButton from "./ProviderButton";

const LoginModal = () => {
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
    <div className="w-[475px] bg-base-100 p-6 rounded-xl shadow-lg">
      <div className="mb-6 text-center">
        <h1 className="mb-2 text-2xl font-semibold ">Welcome</h1>
        <h2 className="text-lg">Please enter your details to sign in.</h2>
      </div>
      <div className="flex gap-2 [&>button]:flex-1">
        <ProviderButton icon={FcGoogle} provider="google" />
        <ProviderButton icon={BsDiscord} provider="discord" />
      </div>
      <div className="my-5 text-sm font-medium divider">or</div>
      <LoginForm />
      {/* TODO forgot password? */}
      <div className="mt-4 text-sm text-center">
        Don't have an account?{" "}
        <span className="font-semibold link text-secondary">
          Create account
        </span>
      </div>
    </div>
  );
};

export default LoginModal;
