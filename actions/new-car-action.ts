"use server";

import { createClient } from "@/utils/supabase/server";
import { newCarSchema } from "@/utils/types";

export async function addCar(prevState:unknown, formData:FormData) {

  const supabase = await createClient();

  const validatedFields = newCarSchema.safeParse({
    make: formData.get('make'),
    model: formData.get('model'),
    year: formData.get('year'),
    mileage: formData.get('mileage'),
    price: formData.get('price'),
    description: formData.get('description'),
  })

  if (!validatedFields.success) {
    return {
      status: 400,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    }
  }

  const {data:userData, error:errorUserData} = await supabase.auth.getUser();

  if(errorUserData || !userData.user) {
    return {
      status: 500,
      message: "An error occurred while trying to add a new car",
    };
}


  const { data, error } = await supabase.from("cars").insert([
    {
      make: validatedFields.data.make,
      model: validatedFields.data.model,
      year: validatedFields.data.year,
      mileage: validatedFields.data.mileage,
      price: validatedFields.data.price,
      description: validatedFields.data.description,
      user_id: userData.user.id,
      image_url: null,
    },
  ]).select("*").single();

  if (error) {
    return {
      status: 500,
      message: error.message,
    };
  }

  return {
    status: 200,
    data,
    message: "Car added successfully",
  };

}
