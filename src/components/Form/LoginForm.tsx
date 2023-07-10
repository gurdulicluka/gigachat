import * as Form from "@radix-ui/react-form";
import { useRef, useState } from "react";
import { signIn } from "../../api/auth";
import { toast, Slide } from "react-toastify";
import ShowPasswordBtn from "../ShowPasswordBtn";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const email = emailRef.current!?.value;
    const password = passwordRef.current!?.value;
    signIn(email, password).then((response) => {
      if ("error" in response) {
        toast.error(response.error, {
          transition: Slide,
        });
      }
    });
  };
  return (
    <Form.Root onSubmit={handleSubmit} className="flex flex-col gap-10">
      {/* Email */}
      <Form.Field className="relative flex flex-col" name="email">
        <Form.Label>
          <Form.Control
            className="input bg-base-100 input-bordered data-[invalid]:input-error w-full"
            asChild>
            <input
              spellCheck={false}
              ref={emailRef}
              placeholder="Email address"
              type="email"
              required
            />
          </Form.Control>
        </Form.Label>
        <Form.Message
          className="text-sm text-error absolute -bottom-[1.5rem]"
          match="valueMissing">
          Please enter your email
        </Form.Message>
        <Form.Message
          className="text-sm text-error absolute -bottom-[1.5rem]"
          match="typeMismatch">
          Please enter a valid email
        </Form.Message>
      </Form.Field>
      {/* Password */}
      <Form.Field className="relative flex flex-col" name="Password">
        <Form.Label>
          <Form.Control
            className="input bg-base-100 pr-16 input-bordered data-[invalid]:input-error w-full"
            asChild>
            <input
              ref={passwordRef}
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              required
            />
          </Form.Control>
        </Form.Label>
        <ShowPasswordBtn
          showPassword={showPassword}
          setShowPassword={setShowPassword}
        />
        <Form.Message
          className="absolute text-sm text-error -bottom-[1.5rem]"
          match="valueMissing">
          Please enter your password
        </Form.Message>
      </Form.Field>
      {/* Submit button */}
      <Form.Submit className="mt-2 capitalize btn btn-neutral" asChild>
        <button>Sign In</button>
      </Form.Submit>
    </Form.Root>
  );
};

export default LoginForm;
