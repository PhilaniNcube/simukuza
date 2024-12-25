"use server"

import { createClient } from "@/utils/supabase/server";
import { updateCarSchema } from "@/utils/types";

export async function updateCar(prevState:unknown, formData:FormData) {

  const supabase = await createClient();

  const validatedFields = updateCarSchema.safeParse({
    make: formData.get('make'),
    model: formData.get('model'),
    year: formData.get('year'),
    mileage: formData.get('mileage'),
    price: formData.get('price'),
    description: formData.get('description'),
    id: formData.get('id'),
    transmission: formData.get('transmission'),
    engine_type: formData.get('engine_type'),
  })

  if (!validatedFields.success) {
    return {
      status: 400,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    }
  }

  const { data:userData, error:errorUserData} = await supabase.auth.getUser();

  if(errorUserData || !userData.user) {
    return {
      status: 500,
      error: 'Database error',
      message: "An error occurred while trying to add a new car",
    };
}

const { data, error } = await supabase.from("cars").update({
  make: validatedFields.data.make,
  model: validatedFields.data.model,
  year: validatedFields.data.year,
  mileage: validatedFields.data.mileage,
  price: validatedFields.data.price,
  description: validatedFields.data.description,
  user_id: userData.user.id,
  image_url: null,
  transmission: validatedFields.data.transmission,
  engine_type: validatedFields.data.engine_type,
}).eq("id", validatedFields.data.id).select('*').single();

if (error) {
  return {
    status: 500,
    message: error.message,
  };
}

return {
  status: 200,
  data,
  message: "Car updated successfully",
};


}
