import { createClient } from "@/utils/supabase/server";


export async function getCarFeatures(car_id: number) {
  const supabase = await createClient();

  const { data, error } = await supabase.from("car_features").select("*").eq("car_id", car_id);

  if (error || !data) {
    return []
  }



  return data;
}
