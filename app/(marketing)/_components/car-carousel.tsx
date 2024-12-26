"use client";

import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Database } from "@/utils/schema";
import CarCard from "./car-card";

type FeaturedCarCarouselProps = {
  data: Database["public"]["Tables"]["cars"]["Row"][];
  carImages: Database["public"]["Tables"]["car_images"]["Row"][];
};

const FeaturedCarCarousel = ({data, carImages}:FeaturedCarCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    skipSnaps: false,
    dragFree: true,
  });



  return (
    <div className="bg-slate-50 py-12">
      <div className="mx-auto max-w-7xl px-4">


        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {data.map((car) => {
                if (!carImages ) {
                  return null;
                }

                return (
                  <div
                    key={car.id}
                    className="flex-[0_0_70%] min-w-0 sm:flex-[0_0_55%] md:flex-[0_0_48%] lg:flex-[0_0_34%]"
                  >
                    <CarCard
                      car={car}
                      carImages={carImages?.filter(
                        (image) => image.car_id === car.id
                      )}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
            onClick={() => emblaApi?.scrollPrev()}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
            onClick={() => emblaApi?.scrollNext()}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarCarousel;
