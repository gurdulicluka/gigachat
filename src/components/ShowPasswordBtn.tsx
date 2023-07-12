import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Dispatch, SetStateAction } from "react";
import * as AccessibleIcon from "@radix-ui/react-accessible-icon";

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
        <AccessibleIcon.Root label="Hide password">
          <AiFillEye size="30px" />
        </AccessibleIcon.Root>
      ) : (
        <AccessibleIcon.Root label="Show password">
          <AiFillEyeInvisible size="30px" color="#9ca3af" />
        </AccessibleIcon.Root>
      )}
    </button>
  );
};

export default ShowPasswordBtn;
