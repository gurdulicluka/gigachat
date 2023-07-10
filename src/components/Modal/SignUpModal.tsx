import SignUpForm from "../Form/SignUpForm";
import { Dispatch, SetStateAction } from "react";

interface Props {
  setIsMember: Dispatch<SetStateAction<boolean>>;
}

const SignUpModal = ({ setIsMember }: Props) => {
  return (
    <div className="w-[475px] bg-base-100 p-6 rounded-xl shadow-lg">
      <div className="mb-6 text-center">
        <h1 className="mb-2 text-2xl font-semibold ">Register</h1>
        <h2 className="text-md">Please fill in the form fields to register</h2>
      </div>
      <SignUpForm />
      <div className="mt-4 text-sm text-center">
        <span>Already a member?</span>
        <button
          onClick={() => setIsMember(true)}
          className="ml-2 font-semibold link text-secondary">
          Sign in
        </button>
      </div>
    </div>
  );
};

export default SignUpModal;
