import { BsDiscord } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import LoginForm from "../Form/LoginForm";
import ProviderButton from "../ProviderButton";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setIsMember: Dispatch<SetStateAction<boolean>>;
}

const LoginModal = ({ setIsMember }: Props) => {
  return (
    <div className="max-w-[475px] w-screen bg-base-100 p-6 rounded-xl shadow-lg">
      <div className="mb-6 text-center">
        <h1 className="mb-2 text-2xl font-semibold ">Welcome</h1>
        <h2 className="text-md">Please enter your details to sign in.</h2>
      </div>
      <div className="flex gap-2 [&>button]:flex-1">
        <ProviderButton icon={FcGoogle} provider="google" />
        <ProviderButton icon={BsDiscord} provider="discord" />
      </div>
      <div className="my-5 text-sm font-medium divider">or</div>
      <LoginForm />
      {/* TODO forgot password? */}
      <div className="mt-4 text-sm text-center">
        <span>Don't have an account?</span>
        <button
          onClick={() => setIsMember(false)}
          className="ml-2 font-semibold link text-secondary">
          Create account
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
