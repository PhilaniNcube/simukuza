import { getCar, getCarImages } from "@/lib/fetchers/cars";
import { getCarFeatures } from "@/lib/fetchers/features";
import CarDetails from "../../_components/car-detail";

const CarPage = async ({params}: {params:Promise<{id:number}>}) => {

  const {id} = await params;

  const carData = getCar(id);
  const carImagesData = getCarImages(id);
  const carFeaturesData = getCarFeatures(id);

  const [car, carImages, carFeatures] = await Promise.all([carData, carImagesData, carFeaturesData]);

  if (!car) {
    return <div>Car not found</div>;
  }

  console.log(car, carImages, carFeatures);

  return <div className="mx-auto max-w-7xl px-4 py-24">
    <CarDetails car={car} car_images={carImages} features={carFeatures} />
  </div>;
};
export default CarPage;
