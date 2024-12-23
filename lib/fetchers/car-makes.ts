import { createClient } from "@/utils/supabase/server";

export async function getMakes() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("car_makes").select("*");

  if (error || !data || data.length === 0) {
    return []
  }

  return data;
}
