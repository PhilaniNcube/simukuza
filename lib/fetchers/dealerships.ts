import "server-only";
import { createClient } from "@/utils/supabase/server";

export async function getMyDealership() {

  const supabase = await createClient();

  // get the user
  const {data, error} = await supabase.auth.getUser();

  if (error) {
    throw new Error(error.message);
  }

  // get the dealership
  const {data: dealership, error: dealershipError} = await supabase
    .from("dealerships")
    .select("*")
    .eq("profile_id", data.user.id)
    .single();

    console.log(dealership);

  if (dealershipError) {
    return null;
  }

  return dealership;

}
