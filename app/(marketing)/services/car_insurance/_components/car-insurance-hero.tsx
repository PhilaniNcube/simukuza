import Image from "next/image";

const CarInsuranceHero = () => {
  return (
    <div className="relative">
      <Image
        src="https://utfs.io/f/84aXfFFbF7G0xq36IdkozaLK0XBlgYrvipoQJq4MIsmTFe8A"
        alt="Car Insurance"
        className="object-cover w-full h-[50vh] md:h-[70vh] lg:h-[80vh]"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-darkgrey bg-opacity-50">
        <div className="mx-auto max-w-7xl px-4 h-full flex items-center justify-center">
          <div className="relative flex flex-col items-center justify-center h-full text-center text-white">
            <h1 className="text-4xl font-light leading-tight md:text-5xl lg:text-6xl">
              Car Insurance
            </h1>
            <p className="mt-4 text-lg md:text-xl font-bold lg:text-2xl">
              Find the best car insurance deals for you
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CarInsuranceHero;