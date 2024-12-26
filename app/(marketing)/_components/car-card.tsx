import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { formatDistance, formatToUsd } from "@/lib/utils";
import { Database } from "@/utils/schema";
import { Clock1, CogIcon, FuelIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type CarCardProps = {
  car: Database['public']['Tables']['cars']['Row'];
  carImages: Database['public']['Tables']['car_images']['Row'][];
};

const CarCard = ({car, carImages}:CarCardProps) => {
  return (
    <Card className="shadow-lg overflow-hidden rounded-2xl">
      <CardHeader className="p-0 ">
        <div className="aspect-video relative">
          <Image
            src={`https://agdxtilhlswciswxjeqt.supabase.co/storage/v1/object/public/car_images/${carImages[0].image_url}`}
            alt={`${car.year} ${car.make} ${car.model}`}
            className="w-full aspect-video object-cover"
            width={800}
            height={600}
          />
        </div>
      </CardHeader>
      <CardContent className="mt-4">
        <h2 className="text-lg text-gray-800">
          {car.year}{" "}
          <span className="font-semibold">
            {car.make} {car.model}
          </span>
        </h2>
        <p className="text-xl md:text-3xl my-1 text-accent font-extrabold italic">
          USD {formatToUsd(car.price)}
        </p>
        {/* list the features */}
        <div className="flex text-accent justify-between flex-wrap text-xs">
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
      <CardFooter>
        <div className="flex justify-end w-full">
          <Link href={`/cars/${car.id}`}>
            <Button className="bg-accent">View Details</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
export default CarCard;
