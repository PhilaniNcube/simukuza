"use server";

import { redirect } from "next/navigation";

export async function homepageFilter(formData:FormData) {

  const make = formData.get("make");
  const model = formData.get("model");
  const minYear = formData.get("min_year");
  const maxYear = formData.get("max_year");
  const min_price = formData.get("min_price");
  const max_price = formData.get("max_price");
  const condition = formData.get("condition");


  redirect(`/cars/condition/${condition}?make=${make}&model=${model}&min_year=${minYear}&max_year=${maxYear}&min_price=${min_price}&max_price=${max_price}`);


}
