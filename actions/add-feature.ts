"use server";

import { createClient } from "@/utils/supabase/server";
import { newCarFeatureSchema } from "@/utils/types";
import { revalidatePath } from "next/cache";

export async function addFeature(prevSate:unknown, formData:FormData) {

  const supabase = await createClient();

  const validatedFields = newCarFeatureSchema.safeParse({
    car_id: formData.get("car_id"),
    feature: formData.get("feature"),
  });

  if (!validatedFields.success) {
    return {
      status: 400,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Invalid fields",
    }
  }

  const { car_id, feature } = validatedFields.data;

  const { data, error } = await supabase.from("car_features").insert({
    car_id,
    feature,
  }).select("*").single();

  if (error) {
    return {
      status: 500,
      message: error.message,
    }
  }

   revalidatePath(`/dashboard/cars/${car_id}`);


  return {
    status: 200,
    data,
    message: "Feature added successfully",
  }
}
