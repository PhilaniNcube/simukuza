
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { searchCars } from "@/lib/fetchers/cars";
import { formatDistance, formatToUsd } from "@/lib/utils";
import { SearchParams } from "@/utils/types";
import { Clock1, CogIcon, FuelIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const UsedCarsPage = async (props: { searchParams: SearchParams }) => {
  const searchParams = await props.searchParams;
  const minPrice = Array.isArray(searchParams.min_price)
    ? searchParams.min_price[0]
    : searchParams.min_price || "";

  const maxPrice = Array.isArray(searchParams.max_price)
    ? searchParams.max_price[0]
    : searchParams.max_price || "1000000";

  const minMileage = Array.isArray(searchParams.min_mileage)
    ? searchParams.min_mileage[0]
    : searchParams.min_mileage || "0";

  const maxMileage = Array.isArray(searchParams.max_mileage)
    ? searchParams.max_mileage[0]
    : searchParams.max_mileage || "1000000";

  const minYear = Array.isArray(searchParams.min_year)
    ? searchParams.min_year[0]
    : searchParams.min_year || "0";

  const maxYear = Array.isArray(searchParams.max_year)
    ? searchParams.max_year[0]
    : searchParams.max_year || "2023";

  const make = Array.isArray(searchParams.make)
    ? searchParams.make[0].toLowerCase()
    : searchParams.make?.toLowerCase() || "";

  const model = Array.isArray(searchParams.model)
    ? searchParams.model[0].toLowerCase()
    : searchParams.model?.toLowerCase() || "";
  const condition = "used";

  // create a query to search for new cars

  const cars = await searchCars(
    minPrice,
    maxPrice,
    minMileage,
    maxMileage,
    minYear,
    maxYear,
    make.toLowerCase(),
    model.toLowerCase(),
    condition
  );

  if (cars.length === 0 || !cars) {
    return (
      <div className="p-3">
        <h1 className="text-2xl md:text-5xl font-semibold">No Cars Found Matching Your Search</h1>
      </div>
    );
  }



  return (
    <div className="p-3">
      <div className="grid sm:grid-cols-2 gap-4 lg:grid-cols-3 ">
        {cars.map((car) => {
          const imageUrl = new URL(
            `${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${car.car_images[0].image_url}`
          );

          return (
            <Link
              className="w-full @container"
              href={`/cars/${car.id}`}
              key={car.id}
            >
              <Card className="w-full rounded-xl overflow-hidden relative hover:shadow-xl">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={imageUrl.toString()}
                    alt={car.make}
                    width={500}
                    height={500}
                    className="aspect-video w-full object-cover hover:scale-110 transition-all duration-300"
                  />
                </div>

                <CardContent className="w-full py-3">
                  <h2 className="text-lg">
                    {car.year} {car.make} {car.model}{" "}
                    <span className="text-xs text-darkgrey">
                      ({car.capacity}L)
                    </span>
                  </h2>
                  <p className="text-xl italic text-accent font-bold ">
                    {formatToUsd(car.price)}
                  </p>
                  <Separator className="my-2" />
                  <div className="flex flex-wrap text-xs text-accent items-center justify-between">
                    <span>
                      <Clock1 size={16} className="inline-block mr-1" />
                      {formatDistance(car.mileage!)}{" "}
                    </span>
                    <span className="capitalize">
                      <CogIcon size={16} className="inline-block mr-1" />
                      {car.transmission}
                    </span>
                    <span className="capitalize">
                      <FuelIcon size={16} className="inline-block mr-1" />
                      {car.engine_type}
                    </span>
                  </div>
                </CardContent>

              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default UsedCarsPage;
