import { createClient } from "@/utils/supabase/server";

export async function getCars() {
  const supabase = await createClient();

  const { data, error } = await supabase.from("cars").select("*").eq("sold", false);

  if (error || !data || data.length === 0) {
    return []
  }

  return data;
}

export async function getMyCars() {
  const supabase = await createClient();

  const userData = await supabase.auth.getUser();

  if (!userData || !userData.data.user) {
    return [];
  }

  const { data, error } = await supabase
    .from("cars")
    .select("*,car_images(image_url), car_features(feature)").eq("user_id", userData.data.user.id).order("created_at", {ascending: false});

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

export async function getCarWithImages(id:number) {

  const supabase = await createClient();

  const car = await supabase.rpc("get_car_details", {p_car_id: id});

  console.log("Car",car.data);
  if (!car.data || car.error) {
    return null;
  }


  return car.data[0];

}

export async function getNewCars() {
const supabase = await createClient();

const {data, error, count} = await supabase.rpc("get_cars_by_condition", {p_condition: "new"});

if (error || !data || data.length === 0) {
  return {
    cars: [],
    count: 0
  }
}

return {
  cars: data,
  count
}

}

export async function getUsedCars() {
  const supabase = await createClient();

  const {data, error, count} = await supabase.rpc("get_cars_by_condition", {p_condition: "used"});

  if (error || !data || data.length === 0) {
    return {
      cars: [],
      count: 0
    }
  }

  return {
    cars: data,
    count
  }

}

export async function getRecentImports() {
  const supabase = await createClient();

  const {data, error, count} = await supabase.rpc("get_cars_by_condition", {p_condition: "recent_import"});

  if (error || !data || data.length === 0) {
    return {
      cars: [],
      count: 0
    }
  }

  return {
    cars: data,
    count
  }

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


export async function searchCars (min_price = "0", max_price = "100000", min_mileage = "0", max_mileage ="300000", min_year = "0", max_year = "2024", make = "", model="", condition:string) {

  const supabase = await createClient();

  const year = new Date().getFullYear();

  // parse the values that are strings to numbers
  const minPrice = Number(min_price) || 0;
  const maxPrice = Number(max_price) || 1000000;
  const minMileage = Number(min_mileage) || 0;
  const maxMileage = Number(max_mileage) || 1000000;
  const minYear = Number(min_year) || 0;
  const maxYear = Number(max_year) || year + 1;


  const { data, error } = await supabase.from("cars").select("*,car_images(image_url), car_features(feature)").gte("price", minPrice).lte("price", maxPrice).gte("mileage", minMileage).lte("mileage", maxMileage).gte("year", minYear).lte("year", maxYear).ilike("make", `%${make}%`).eq("condition", condition).ilike("model", `%${model}%`);

  console.log({data, error});

  if (error || !data || data.length === 0) {
    return []
  }

  return data;

}
