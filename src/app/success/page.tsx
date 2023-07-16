"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabaseClient";
import { signOut } from "../../lib/auth";
import { useRouter } from "next/navigation";

export default function Success() {
  const router = useRouter();
  const [authorizing, setAuthorizing] = useState(true);

  useEffect(() => {
    console.log("useEffect SUCCESS PAGE");
    supabase.auth.getSession().then((response) => {
      if (!response.data.session) {
        router.push("/");
        console.log("Unauthorized, redirecting to login page..");
      } else {
        setAuthorizing(false);
      }
    });
  }, []);

  function signOutUser() {
    signOut().then((error) => {
      if (error) {
        console.log(error);
      } else {
        router.push("/");
      }
    });
  }

  async function createProfile() {
    const res = await axios.get("/api/profile/Admin").then((response) => {
      console.log(response);
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
          <button onClick={createProfile}>Make Profile</button>
        </>
      )}
    </div>
  );
}
