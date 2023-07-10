import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Dispatch, SetStateAction } from "react";

interface Props {
  showPassword: boolean;
  setShowPassword: Dispatch<SetStateAction<boolean>>;
}

const ShowPasswordBtn = ({ showPassword, setShowPassword }: Props) => {
  return (
    <button
      type="button"
      className="absolute right-0 z-0 px-3 my-auto border-l border-gray-200 inset-y-[1px]"
      onClick={() => setShowPassword(!showPassword)}>
      {showPassword ? (
        <AiFillEye size="30px" />
      ) : (
        <AiFillEyeInvisible size="30px" color="#9ca3af" />
      )}
    </button>
  );
};

export default ShowPasswordBtn;
