import { createClient } from "@/utils/supabase/server";
import FeaturedCarCarousel from "./car-carousel";

const FeaturedCars = async () => {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from("cars")
    .select("*")
    .eq("sold", false)
    .limit(3);
  const { data: carImages, error: carImagesError } = await supabase
    .from("car_images")
    .select("*");

  if (error || carImagesError) {
    return <div>error</div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
     <FeaturedCarCarousel data={data} carImages={carImages} />
    </div>
  );
};
export default FeaturedCars;
