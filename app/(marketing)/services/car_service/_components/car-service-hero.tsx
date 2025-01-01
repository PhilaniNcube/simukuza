import Image from "next/image";

const CarServiceHero = () => {
  return (
    <div className="relative">
      <Image
        src="https://utfs.io/f/84aXfFFbF7G0XPiK9idPIr4SKk9jlcph1HJMy6ZGqbQgCtds"
        alt="Car Insurance"
        className="object-cover w-full h-[50vh] md:h-[70vh] lg:h-[80vh]"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-darkgrey bg-opacity-50">
        <div className="mx-auto max-w-7xl px-4 h-full flex items-center justify-center">
          <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-4xl font-light leading-tight md:text-5xl lg:text-6xl">
              Car Service
            </h1>
            <p className="mt-4 text-lg md:text-xl font-bold lg:text-2xl">
              Keep your car in top condition with our car service deals
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarServiceHero;
