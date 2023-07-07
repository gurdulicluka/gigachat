import React, { useEffect, useState } from "react";
import { supabase } from "../lib/helper/supabaseClient";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      await supabase.auth.getUser().then((value) => {
        if (value.data?.user) {
          console.log("get user data", value.data.user);
          setUser(value.data.user);
        }
      });
    }
    getUserData();
  }, []);

  async function signOutUser() {
    const { error } = await supabase.auth.signOut();
    navigate("/");
  }

  return (
    <div className="text-white">
      {Object.keys(user).length !== 0 ? (
        <>
          <span>You are logged in!</span>
          <button onClick={() => signOutUser()}>Sign Out</button>
        </>
      ) : (
        <>
          <h1>Please log in</h1>
          <button onClick={() => navigate("/")}>Go Back Home</button>
        </>
      )}
    </div>
  );
};

export default Success;
