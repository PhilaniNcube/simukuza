import { getCarWithImages } from "@/lib/fetchers/cars";
import AboutSimukuza from "./_components/about-simukuza";
import BuyingEssentials from "./_components/buying-essentials";
import CarHelp from "./_components/car-help";
import CustomerPromise from "./_components/customer-promise";
import FeaturedCars from "./_components/featured-cars";
import HomepageHero from "./_components/homepage-hero";
import LatestNews from "./_components/latest-news";

export default async function Home() {

    const fullData = await getCarWithImages(1);

    console.log(fullData);

  return (
    <div>
      <HomepageHero />
      <FeaturedCars />
      <CustomerPromise />
      <BuyingEssentials />
      <LatestNews />
      <CarHelp />
      <AboutSimukuza />
    </div>
  );
}
