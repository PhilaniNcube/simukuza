/* eslint-disable @next/next/no-img-element */
import { createClient } from "@/utils/supabase/server";

const VehicleImage = async ({path}:{path:string}) => {

 const supabase = await createClient();

  const { data } = await supabase.storage.from("car_images").getPublicUrl(path);

  if(!data) {
    return <div>VehicleImage</div>;
  }

  return <div>
    <img src={data.publicUrl} alt="Vehicle Image" className="w-full object-cover aspect-square" />
  </div>;
};
export default VehicleImage;
