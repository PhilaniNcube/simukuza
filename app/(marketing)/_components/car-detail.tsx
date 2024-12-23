"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database } from "@/utils/schema";
import { formatDistance, formatToUsd } from "@/lib/utils";

interface CarDetailsProps {
  car: Database["public"]["Tables"]["cars"]["Row"];
  car_images: string[];
  features: Database["public"]["Tables"]["car_features"]["Row"][];
}

export default function CarDetails({
  car,
  car_images,
  features,
}: CarDetailsProps) {
  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardContent className="p-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Left column: Image carousel */}
          <div>
            <Carousel className="w-full">
              <CarouselContent>
                {car_images.map((item, index) => (
                  <CarouselItem key={item}>
                    <div className="aspect-video relative">
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_IMAGE_URL}/${item}`}
                        alt={`${car.model} - Image ${index + 1}`}
                        width={1920}
                        height={1080}
                        className="object-cover w-full aspect-video rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

          {/* Right column: Car details */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-bold">
                {car.year} {car.make} {car.model}
              </h2>
              <Badge variant="secondary" className="text-lg px-3 py-1 mt-2">
                {formatToUsd(car.price)}
              </Badge>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Description</h3>
              <p className="text-gray-600 dark:text-gray-300">
                {car.description}
              </p>
              <div className="w-full flex justify-between items-center mt-4 gap-3">
                <div>
                  <span className="text-gray-500 text-sm dark:text-gray-300">
                    Mileage: {formatDistance(car.mileage!)}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2">Features</h3>
              <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
                {features.map((item) => (
                  <li key={item.id}>{item.feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
