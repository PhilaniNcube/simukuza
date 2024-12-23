import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomepageHero() {
  return (
    <section className="relative h-[90vh] overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <Image
          src="https://agdxtilhlswciswxjeqt.supabase.co/storage/v1/object/public/car_images/aqua_banner.jpg"
          alt="Toyota Aqua"
          width="1920"
          height="1080"
          priority
          className="opacity-70 w-full h-full object-cover"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl">
            <span className="block">Drive Your Dreams</span>
            <span className="block text-yellow-400">Find Your Perfect Car</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Discover a wide range of quality vehicles. From luxury to economy,
            we have the perfect car waiting for you.
          </p>
          <div className="mt-10 sm:flex sm:justify-center">
            <div className="rounded-md shadow">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/cars">Browse Inventory</Link>
              </Button>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full sm:w-auto bg-white text-gray-900 hover:bg-gray-100"
              >
                <Link href="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
