
import { createClient } from "@/utils/supabase/server";
import CarCard from "./car-card";

const MainCarsList = async () => {
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
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-center font-semibold text-xl md:text-2xl lg:text-3xl py-10">
          Cars On Sale
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((car) => {
            if (!carImages || carImagesError) {
              return null;
            }

            return (
              <CarCard
                key={car.id}
                car={car}
                carImages={carImages?.filter(
                  (image) => image.car_id === car.id
                )}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default MainCarsList;
