import AddCarFeature from "@/app/(dashboard)/_components/add-car-feature";
import UpdateCarForm from "@/app/(dashboard)/_components/update-car-form";
import ImageUpload from "@/app/(dashboard)/_components/upload-image";
import { getMakes } from "@/lib/fetchers/car-makes";
import { getCar, getCarImages } from "@/lib/fetchers/cars";
import { getCarFeatures } from "@/lib/fetchers/features";

const CarPage = async ({ params }: { params: Promise<{ id: number }> }) => {
  const { id } = await params;

  const carData =  getCar(id);
  const makesData =  getMakes();
  const imagesData =  getCarImages(id);
  const featuresData =  getCarFeatures(id);

  const [car, makes, images, features] = await Promise.all([carData, makesData, imagesData, featuresData]);






  if (!car) {
    return (
      <div>
        <h1 className="text-lg font-semibold text-gray-800">Car not found</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-lg font-semibold text-gray-800">
        {car.make} {car.model}
      </h1>
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <UpdateCarForm car={car} makes={makes}/>
          <AddCarFeature car_id={id} features={features} />
        </div>
        <div className="col-span-1">
          <ImageUpload car_id={id} images={images} />
        </div>
      </div>
    </div>
  );
};
export default CarPage;
