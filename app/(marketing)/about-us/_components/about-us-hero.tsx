import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const AboutUsHero = () => {
  return (
    <div className="pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 @container">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="h-[60vh]">
            <Image
              src="https://utfs.io/f/84aXfFFbF7G0gVFRD94v17Tnx8QZUwM0qphVol5iNJjbyasA"
              alt="FAQ Hero"
              width={1920}
              height={1280}
              className="w-full h-full object-cover aspect-auto"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl lg:text-6xl font-light text-accent mb-4">
              About Us
            </h1>
            <p className="text-lg font-extralight text-darkgrey">
           We are a team of passionate individuals who are dedicated to providing the best automotive retail experience in Zimbabwe.
           From imported, new and local used vehicles, we have a wide range of vehicles to choose from. With our comitment to customer satisfaction, we are here to help you find the perfect vehicle for your needs.
            </p>
            <Link href="/cars/">
              <Button className="mt-8 bg-lightblue">View Our Vehicles</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUsHero;
