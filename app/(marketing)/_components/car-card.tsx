import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { formatDistance, formatToUsd } from "@/lib/utils";
import { Database } from "@/utils/schema";
import { Calendar, RulerIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type CarCardProps = {
  car: Database['public']['Tables']['cars']['Row'];
  carImages: Database['public']['Tables']['car_images']['Row'][];
};

const CarCard = ({car, carImages}:CarCardProps) => {
  return (
    <Card>
      <CardHeader className="p-0">
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
        <h2 className="text-xl font-semibold text-gray-800">
          {car.make} {car.model}
        </h2>
        <p className="text-lg my-3 text-gray-500">{formatToUsd(car.price)}</p>
        {/* list the features */}
        <div className="flex justify-between flex-wrap">
          <span>
            <Calendar size={16} className="inline-block mr-1" />
            {car.year}
          </span>
          <span>
            <RulerIcon size={16} className="inline-block mr-1" />
            {formatDistance(car.mileage!)}{" "}
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex justify-end w-full">
          <Link href={`/cars/${car.id}`}>
            <Button>View Details</Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};
export default CarCard;
