"use server";

import { createClient } from "@/utils/supabase/server";
import { updateCarImageSchema } from "@/utils/types";
import { revalidatePath } from "next/cache";

export async function uploadImage(prevState: unknown, formData: FormData) {
  const supabase = await createClient();

  // get the file from the form data
  const file = formData.get("file") as File;

  // generate a unique name for the file
  const fileName = crypto.randomUUID();

  // upload the file to the server
  const { data, error } = await supabase.storage
    .from("car_images")
    .upload(fileName, file);

  if (error) {
    return {
      status: 500,
      message: error.message,
    };
  }

  // get the base url for the file from the server
  // https://agdxtilhlswciswxjeqt.supabase.co/storage/v1/object/public/car_images/68e6ef23-b14e-4710-b421-ead69a47d290

  const validatedFields = updateCarImageSchema.safeParse({
    id: formData.get("id"),
    image_url: data.path,
    car_id: formData.get("car_id"),
  });

  if (!validatedFields.success) {
    return {
      status: 400,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    };
  }

  const { data: userData, error: errorUserData } =
    await supabase.auth.getUser();

  if (errorUserData || !userData.user) {
    return {
      status: 500,
      error: "Database error",
      message: "An error occurred while trying to add a new car",
    };
  }

  // add the image to the car_images table
  const { error: carImageError, data:imageData } = await supabase
    .from("car_images")
    .insert([
      {
        car_id: validatedFields.data.car_id,
        image_url: validatedFields.data.image_url,
      },
    ])
    .select("*")
    .single();

  if (carImageError) {
    return {
      status: 500,
      message: carImageError.message,
    };
  }





  revalidatePath(`/dashboard/cars/${imageData.car_id}`);

  return {
    status: 200,
    message: "Image uploaded successfully",
    image_url: imageData.image_url,
  };
}
