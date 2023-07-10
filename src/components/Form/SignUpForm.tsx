import * as Form from "@radix-ui/react-form";
import { useRef } from "react";
import { signUp } from "../../api/auth";

const SignUpForm = () => {
  const usernameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const username = usernameRef.current!?.value;
    const email = emailRef.current!?.value;
    const password = passwordRef.current!?.value;
    signUp(email, password, username).then((res) => console.log(res));
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
              ref={usernameRef}
              placeholder="Username"
              type="text"
              required
            />
          </Form.Control>
        </Form.Label>
        <Form.Message
          className="text-sm text-error absolute -bottom-[1.5rem]"
          match="valueMissing">
          Username cannot be blank
        </Form.Message>
      </Form.Field>
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
            className="input bg-base-100 input-bordered data-[invalid]:input-error w-full"
            asChild>
            <input
              ref={passwordRef}
              placeholder="Password"
              type="password"
              minLength={6}
              required
            />
          </Form.Control>
        </Form.Label>
        <Form.Message
          className="absolute text-sm text-error -bottom-[1.5rem]"
          match="valueMissing">
          Please enter a password
        </Form.Message>
        <Form.Message
          className="absolute text-sm text-error -bottom-[1.5rem]"
          match="tooShort">
          Password must have 6 characters or more
        </Form.Message>
      </Form.Field>
      {/* Submit button */}
      <Form.Submit className="mt-2 capitalize btn btn-neutral" asChild>
        <button>Create Account</button>
      </Form.Submit>
    </Form.Root>
  );
};

export default SignUpForm;
