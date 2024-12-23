"use server";

import { createClient } from "@/utils/supabase/server";
import { loginSchema } from "@/utils/types";

export async function loginAction(prevState:unknown, formData:FormData) {

   const supabase = await createClient();

  const validatedFields = loginSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  })

  if (!validatedFields.success) {
    return {
      status: 400,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields"
    };
  }

  const { email, password } = validatedFields.data;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    return {
      status: 500,
      message: error.message,
    };
  }

  return {
    status: 200,
    message: "User logged in successfully"
  };
}
