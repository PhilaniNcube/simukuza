"use server";

import { createClient } from "@/utils/supabase/server";
import { forgotPasswordSchema } from "@/utils/types";

export async function forgotPassword(
  prevState: unknown,
  formData: FormData
) {

  const supabase = createClient();

  const validatedFields = forgotPasswordSchema.safeParse({
    email: formData.get("email"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid email. Please check your input.",
    };
  }

  const { email } = validatedFields.data;

  try {
    const { error } = await (await supabase).auth.resetPasswordForEmail(email, {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/reset-password`,
    });

    if (error) {
      throw error;
    }

    return {
      message: "Password reset email sent. Please check your inbox.",
    };
  } catch (error) {
    console.error("Forgot password error:", error);
    return {
      message: "An error occurred. Please try again later.",
    };
  }
}
