import Image from "next/image";

const CarFinanceHero = () => {
  return (
    <div className="relative">
      <div className="max-w-7xl mx-auto pt-32 pb-12 px-4 @container">
        <div className="grid grid-cols-1 @md:grid-cols-2 @lg:grid-cols-3 gap-6">
          <Image
            src="https://utfs.io/f/84aXfFFbF7G0TyOBkmtdZe0PC5Gk8TyQmWExKaMgw3Jl9D4H"
            alt="Car Finance Hero"
            className="object-cover w-full h-[50vh] @md:h-[70vh] @lg:h-[80vh] col-span-1 @lg:col-span-2"
            width={1920}
            height={1080}
          />
          <div className="col-span-1">
            <div className="h-full flex items-center">
              <div className="relative flex flex-col h-full justify-center text-accent">
                <h1 className="text-4xl font-light leading-tight md:text-5xl lg:text-6xl">
                  Car Finance
                </h1>
                <p className="mt-4 text-lg md:text-xl text-darkblue lg:text-2xl">
                  Find the best car finance deals for you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarFinanceHero;
