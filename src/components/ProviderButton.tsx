import { signInThirdParty } from "../lib/auth";
import { IconType } from "react-icons";
import { Provider } from "@supabase/supabase-js";
import { Slide, toast } from "react-toastify";

interface Props {
  icon: IconType;
  provider: Provider;
}

const ProviderButton = (props: Props) => {
  const { icon: Icon, provider } = props;

  async function handleSignIn() {
    const response = await signInThirdParty(provider);
    if ("error" in response) {
      toast.error(response.error.toString(), {
        transition: Slide,
      });
    }
  }

  return (
    <button
      onClick={() => handleSignIn()}
      className="capitalize border-base-300 btn btn-ghost">
      <Icon size="22px" />
      <span>{provider}</span>
    </button>
  );
};

export default ProviderButton;
