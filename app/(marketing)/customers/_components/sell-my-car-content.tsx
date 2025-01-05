import Image from "next/image";

const SellMyCarContent = () => {
  return (
    <div className="pt-32">
      <div className="mx-auto @container max-w-7xl px-4">
        <div className="grid @md:grid-cols-3 gap-4">
          <div className="@md:col-span-2">
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-darkgrey font-light max-w-2xl text-balance">
              How to sell your car in{" "}
              <span className="text-accent font-semibold italic">
                Simukuza Auto
              </span>
            </h2>
            <p className="text-lg text-darkgrey font-light max-w-2xl text-balance mt-4">
              Looking to sell your car quickly and for the best possible price
              in Harare? You&apos;ve come to the right place! At{" "}
              <span className="font-semibold">Simukuza Auto</span>, we make
              selling your car a seamless and stress-free experience. Whether
              you&apos;re a private individual looking to upgrade or a
              dealership wanting to expand your reach, our platform connects you
              with a vast network of potential buyers across Harare and beyond.
            </p>
            <p className="text-lg text-darkgrey font-light max-w-2xl text-balance mt-4">
              We believe in providing a level playing field, which is why we
              welcome listings from both private car sellers and reputable car
              dealerships. Get your vehicle seen by more interested parties and
              find the perfect buyer today!
            </p>
            <p className="text-lg text-darkgrey font-light max-w-2xl text-balance mt-4">
              Ready to sell your car with <span className="font-semibold">Simukuza Auto</span>? Simply fill out our online form, provide us with the necessary details, and we&apos;ll take care of the rest. Our team of experts will review your listing, ensure it meets our quality standards, and publish it on our platform for maximum visibility. With <span className="font-semibold">Simukuza Auto</span>, selling your car has never been easier!
              </p>
          </div>
          <div className="w-full">
            <Image
              src="https://utfs.io/f/84aXfFFbF7G0AsSNNew1F4ADrImbfYUOlc86a32eSKWEixvN"
              className="object-cover w-full h-[65vh] md:h-[75vh] lg:h-[85vh]"
              alt="Sell My Car"
              width={1920}
              height={1280}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SellMyCarContent;
