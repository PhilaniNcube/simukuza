"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function deleteImage(car_id: number, image_url: string) {
  const supabase = await createClient();



  // delete the file from the server
  const { data, error } = await supabase.from("car_images").delete().eq("image_url", image_url);

  console.log({data, error});

  if (error) {
    return {
      status: 500,
      message: error.message,
    };
  }

  revalidatePath(`/dashboard/cars/${car_id}`);

  return {
    status: 200,
    data: data,
  };
}
