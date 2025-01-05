"use server";

import { createClient } from "@/utils/supabase/server";
import { newDealershipSchema } from "@/utils/types";
import { revalidatePath } from "next/cache";

export async function addDealership(prevState:unknown, formData:FormData) {

  const supabase = await createClient();

  const validatedFields = newDealershipSchema.safeParse({
    name: formData.get("name"),
    contact_number: formData.get("contact_number"),
    email: formData.get("email"),
    location: formData.get("location"),
  })

  if(!validatedFields.success) {
    return {
      fieldErrors: validatedFields.error.flatten().fieldErrors,
      success: false,
    }
  }

  const {data, error} = await supabase.from("dealerships").insert([
    {
      name: validatedFields.data.name,
      contact_number: validatedFields.data.contact_number,
      email: validatedFields.data.email,
      location: validatedFields.data.location,
    }
  ])

  if(error) {
    return {
      errors: {general: error.message},
      success: false,
    }
  }

  revalidatePath("/dashboard/dealership");

  return {
    success: true,
    data: data,
  }

}
