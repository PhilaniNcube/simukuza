import Image from "next/image";

const TradeInHero = () => {
  return (
    <div className="pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 @container">
        <div className="grid @md:grid-cols-2 @lg:grid-cols-3 gap-6">
          <div className="@lg:col-span-2 h-[60vh]">
            <Image
              src="https://utfs.io/f/84aXfFFbF7G0lRGf6j7qTUWRPkLrFg4CM7IxY12B8q3iNOZh"
              alt="Trade In Hero"
              width={1920}
              height={1280}
              className="w-full h-full object-cover aspect-auto"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl @lg font-light text-accent mb-4">
              Trade In Your Vehicle
            </h1>
            <p className="text-lg text-darkgrey">
              Trade in your vehicle and get a fair price for your car. We offer
              competitive prices for your used vehicle.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TradeInHero;
