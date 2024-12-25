"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";


const essentials = [
  {
    title: "Vehicle Insurance",
    description:
      "Ensure the vehicle has valid insurance and is roadworthy",

  },
  {
    title: "Security Advice",
    description:
      "Verify all paperwork including registration, service history and ownership",

  },
  {
    title: "Vehicle Financing",
    description:
      "Get pre-approved for a car loan to make the buying process easier",

  },
];

const BuyingEssentials = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({
      align: "start",
      skipSnaps: false,
      dragFree: true,
    });

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 py-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-500 font-extralight text-balance leading-4 text-center">
          Buying{" "}
          <span className="italic text-accent font-extrabold">Essentials</span>
        </h2>

        <div className="relative pt-8">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6 mx-auto">
              {essentials.map((item, index) => (
                <div
                  className="flex-[0_0_90%] min-w-0 sm:flex-[0_0_45%] lg:flex-[0_0_30%]"
                  key={index}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl flex items-center font-extrabold text-accent gap-2 uppercase">
                        <span className="text-black capitalize font-extralight">
                          {item.title.split(" ")[0]}
                        </span>
                        <span className="italic">{item.title.split(" ")[1]}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              ))}
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
export default BuyingEssentials;
