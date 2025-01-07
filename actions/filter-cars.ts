"use server";

import { redirect } from "next/navigation";
import { z } from "zod";

const searchInputsSchema = z.object({
  min_year: z.coerce.number(),
  max_year: z.coerce.number(),
  make: z.string(),
  model: z.string(),
  min_price: z.coerce.number(),
  max_price: z.coerce.number(),
  min_mileage: z.coerce.number(),
  max_mileage: z.coerce.number(),
  condition: z.string(),
});

export async function searchCarsAction(formData: FormData) {


  const validatedFields = searchInputsSchema.safeParse({
    min_year: formData.get("min_year"),
    max_year: formData.get("max_year"),
    make: formData.get("make"),
    model: formData.get("model"),
    min_price: formData.get("min_price"),
    max_price: formData.get("max_price"),
    min_mileage: formData.get("min_mileage"),
    max_mileage: formData.get("max_mileage"),
    condition: formData.get("condition"),
  });

  const year = new Date().getFullYear();

  const condition = formData.get("condition") || "new";

  if (!validatedFields.success) {

   redirect(
     `/buy-a-car?condition=${condition}&make=&model=&min_year=0&max_year=${year}&min_price=0&max_price=1000000&min_mileage=0&max_mileage=1000000`
   );
  }



  redirect(
    `/buy-a-car?condition=${validatedFields.data.condition}&make=${validatedFields.data.make}&model=${validatedFields.data.model}&min_year=${validatedFields.data.min_year}&max_year=${validatedFields.data.max_year}&min_price=${validatedFields.data.min_price}&max_price=${validatedFields.data.max_price}&min_mileage=${validatedFields.data.min_mileage}&max_mileage=${validatedFields.data.max_mileage}`
  );
}
