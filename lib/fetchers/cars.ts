import { createClient } from "@/utils/supabase/server";

export async function getCars() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("cars").select("*");

  if (error || !data || data.length === 0) {
    return []
  }

  return data;
}

export async function getCar(id:number) {
  const supabase = await createClient();

  const { data, error } = await supabase.from("cars").select("*").eq("id", id);

  if (error || !data || data.length === 0) {
    return null
  }

  return data[0];
}


export async function getCarImages(carId:number) {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("car_images")
    .select("image_url")
    .eq("car_id", carId);

  if (error || !data || data.length === 0) {
    return [];
  }

  // Map the array of objects to array of strings

  return data.map((image) => image.image_url);
}


export const getPublicUrl = async (path:string) => {

  const supabase = await createClient();

  const { data } = await supabase.storage.from("car_images").getPublicUrl(path);

  if(!data) {
    return null;
  }

  return data.publicUrl;

};
