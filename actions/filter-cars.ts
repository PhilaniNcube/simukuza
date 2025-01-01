"use server";


import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const searchInputsSchema = z.object({
  min_year:z.coerce.number(),
  max_year:z.coerce.number(),
  make:z.string(),
  model:z.string(),
  min_price:z.coerce.number(),
  max_price:z.coerce.number(),
  min_mileage:z.coerce.number(),
  max_mileage:z.coerce.number(),
  condition: z.string()
});


export async function searchCarsAction(prevState:unknown, formData:FormData) {

  const supabase = await createClient();

  const validatedFields = searchInputsSchema.safeParse({
    min_year: formData.get("min_year"),
    max_year: formData.get("max_year"),
    make: formData.get("make"),
    model: formData.get("model"),
    min_price: formData.get("min_price"),
    max_price: formData.get("max_price"),
    min_mileage: formData.get("min_mileage"),
    max_mileage: formData.get("max_mileage"),
    condition: formData.get("condition")
  });

  if (!validatedFields.success) {
    console.error(validatedFields.error.flatten());
    return []
  }

  const { data, error } = await supabase
    .from("cars")
    .select("*, car_images(image_url), car_features(feature)")
    .eq("make", validatedFields.data.make)
    .eq("model", validatedFields.data.model)
    .gte("year", validatedFields.data.min_year)
    .lte("year", validatedFields.data.max_year)
    .gte("price", validatedFields.data.min_price)
    .lte("price", validatedFields.data.max_price)
    .gte("mileage", validatedFields.data.min_mileage)
    .lte("mileage", validatedFields.data.max_mileage)
    .eq("condition", validatedFields.data.condition);

    console.log(data);
    revalidatePath(`/cars/condition/${validatedFields.data.condition}`, "layout");

    if (error) {
      console.error(error);
      return []
    }

    return data;





}
