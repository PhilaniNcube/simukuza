"use server";

import { createClient } from "@/utils/supabase/server";
import { signUpSchema } from "@/utils/types";
import { revalidatePath } from "next/cache";

export async function signUpAction(prevState:unknown, formData:FormData) {

   const supabase = await createClient();

  const validatedFields = signUpSchema.safeParse({
    full_name: formData.get("full_name"),
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

  const { full_name, email, password } = validatedFields.data;

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        full_name,
      },
    }
  });

  if (error) {
    return {
      status: 500,
      message: error.message,
    };
  }

  revalidatePath("/")

  return {
    status: 200,
    message: "User created successfully"
  };


}
