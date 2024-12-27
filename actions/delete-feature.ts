"use server";

import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function deleteFeature(car_id:number, car_feature_id: number) {

  const supabase = await createClient();

  const { data, error } = await supabase.from("car_features").delete().eq("id", car_feature_id);

  if (error) {
    return {
      status: 500,
      error: "Database error",
      message: "An error occurred while trying to delete a feature",
    };
  }

  revalidatePath(`/dashboard/cars/${car_id}`);

  return {
    status: 200,
    data,
    message: "Feature deleted successfully",
  };

}
