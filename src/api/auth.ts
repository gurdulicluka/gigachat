import { Provider } from "@supabase/supabase-js";
import { supabase } from "../lib/helper/supabaseClient";

export async function createAccount(
  email: string,
  password: string,
  username: string
) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        username: username,
      },
    },
  });
  if (error) return { error: "User already registered" };
  return data;
}

export async function signIn(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) return { error: "Invalid login credentials" };
  return data;
}

export async function signInThirdParty(provider: Provider) {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: provider,
    options: {
      redirectTo: "/success",
    },
  });
  if (error) return error;
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) return error;
}
