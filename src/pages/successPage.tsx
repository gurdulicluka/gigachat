import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "../lib/helper/supabaseClient";
import { signOut } from "../api/auth";

const Success = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          setUser(value.data.user);
        }
      });
    }
    getUserData();
  }, []);

  async function signOutUser() {
    const response = await signOut();
    if (response) {
      console.log("Something went wrong", response);
    }
    navigate("/");
  }

  return (
    <div className="text-white bg-black">
      {Object.keys(user).length !== 0 ? (
        <>
          <span>You are logged in!</span>
          <button className="btn" onClick={() => signOutUser()}>
            Sign Out
          </button>
        </>
      ) : (
        <>
          <h1>Please log in</h1>
          <Link className="btn" to={"/"}>
            Login Page
          </Link>
        </>
      )}
    </div>
  );
};

export default Success;
