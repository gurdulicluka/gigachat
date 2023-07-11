import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/helper/supabaseClient";
import { signOut } from "../api/auth";

const Success = () => {
  const navigate = useNavigate();
  const [authorizing, setAuthorizing] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then((response) => {
      if (!response.data.session) {
        navigate("/");
      } else {
        setAuthorizing(false);
      }
    });
  }, []);

  function signOutUser() {
    signOut().then((response) => {
      if (response) {
      } else {
        navigate("/");
      }
    });
  }

  return (
    <div className="text-white bg-black">
      {/* TODO Don't show authorizing loader when already authorized on page refresh */}
      {authorizing ? (
        <div>Authorizing...</div>
      ) : (
        <>
          <span>You are logged in!</span>
          <button className="btn" onClick={() => signOutUser()}>
            Sign Out
          </button>
        </>
      )}
    </div>
  );
};

export default Success;
