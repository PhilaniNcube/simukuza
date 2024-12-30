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
      <div className="flex justify-start">
        <div className=" rounded-l-full rounded-tr-full bg-accent w-fit p-2 pr-5 font-extrabold text-white shrink-0 border-b-[1px] border-b-accent">
          <h2 className="text-balance leading-4 text-center uppercase text-xs md:text-md lg:text-2xl">
            Featured Listings
          </h2>
        </div>
        <div className="flex relative bg-white w-full  border-b-[1px] border-b-accent ">
          <div className="flex w-full justify-end">

          </div>
        </div>
      </div>
      <FeaturedCarCarousel data={data} carImages={carImages} />
    </div>
  );
};
export default FeaturedCars;
