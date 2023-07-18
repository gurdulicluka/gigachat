"use client";
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

  async function retrieveSession() {
    const { data, error } = await supabase.auth.getSession();
    if (error) console.log("Error", error);
    else {
      console.log("Here is your session", data);
      console.log("Expires at:", new Date(data.session?.expires_at! * 1000));
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      {authorizing ? (
        <div>Authorizing...</div>
      ) : (
        <>
          <div className="flex flex-col items-center gap-3">
            <h1 className="mb-5 text-6xl font-bold text-white">
              You are logged in!
            </h1>
            <button className="w-1/2 btn" onClick={() => signOutUser()}>
              Sign Out
            </button>
            <button className="w-1/2 btn" onClick={retrieveSession}>
              Get Session
            </button>
          </div>
        </>
      )}
    </div>
  );
}
