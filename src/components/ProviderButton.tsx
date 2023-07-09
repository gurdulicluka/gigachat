import { signInThirdParty } from "../api/auth";
import { IconType } from "react-icons";
import { Provider } from "@supabase/supabase-js";

interface Props {
  icon: IconType;
  provider: Provider;
}

const ProviderButton = (props: Props) => {
  const { icon: Icon, provider } = props;
  return (
    <button
      onClick={() => signInThirdParty(provider)}
      className="capitalize border-base-300 btn btn-ghost">
      <Icon size="22px" />
      <span>{provider}</span>
    </button>
  );
};

export default ProviderButton;
