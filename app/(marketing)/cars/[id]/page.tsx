import { getCarWithImages } from "@/lib/fetchers/cars";
import CarDetails from "../../_components/car-detail";

const CarPage = async ({params}: {params:Promise<{id:number}>}) => {

  const {id} = await params;

  const car = await getCarWithImages(id);




  if (!car) {
    return <div>Car not found</div>;
  }



  return <div className="mx-auto max-w-7xl px-4 py-24">
    <CarDetails car={car} />
  </div>;
};
export default CarPage;
