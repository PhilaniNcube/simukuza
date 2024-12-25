import { createClient } from "@/utils/supabase/server";
import CarCard from "./car-card";

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

  if (error) {
    return <div>error</div>;
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((car) => {
          if (!carImages || carImagesError) {
            return null;
          }

          return (
            <CarCard
              key={car.id}
              car={car}
              carImages={carImages?.filter((image) => image.car_id === car.id)}
            />
          );
        })}
      </div>
    </div>
  );
};
export default FeaturedCars;
