"use client";
import LoginModal from "@/components/Modal/LoginModal";
import SignUpModal from "@/components/Modal/SignUpModal";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useRouter } from "next/navigation";

export default function Login() {
  const [isMember, setIsMember] = useState(true);
  const router = useRouter();

  useEffect(() => {
    console.log("useEffect LOGIN PAGE");
    // if session active -> redirect to protected route
    supabase.auth.getSession().then((response) => {
      if (response.data.session) {
        console.log("Already logged in, redirecting..");
        router.push("/success");
      }
    });
    // if user logs in successfully -> redirect to protected route
    supabase.auth.onAuthStateChange(async (event) => {
      console.log("Auth event is", event);
      event === "SIGNED_IN" && router.push("/success");
    });
  }, []);

  return (
    <div className="flex items-center justify-center h-[100svh] mx-auto">
      {isMember ? (
        <LoginModal setIsMember={setIsMember} />
      ) : (
        <SignUpModal setIsMember={setIsMember} />
      )}
    </div>
  );
}
