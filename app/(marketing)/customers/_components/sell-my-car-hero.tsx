import Image from "next/image";

const SellMyCarHero = () => {
  return (
    <div className="relative">
      <Image
        src="https://utfs.io/f/84aXfFFbF7G0Ddbt3UpCxOEW3v795MBzGdP1ypogUZw6V4LT"
        className="object-cover w-full h-[65vh] md:h-[75vh] lg:h-[85vh]"
        alt="Sell My Car"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-lightgrey bg-opacity-50 flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 h-full flex justify-center items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-800 font-medium text-center max-w-2xl text-balance">
            Want to sell your car fast, easy, and reach more buyers in Harare!
          </h1>
        </div>
      </div>
    </div>
  );
};
export default SellMyCarHero;
