import BuyingEssentials from "./_components/buying-essentials";
import CustomerPromise from "./_components/customer-promise";
import FeaturedCars from "./_components/featured-cars";
import HomepageHero from "./_components/homepage-hero";
import LatestNews from "./_components/latest-news";

export default function Home() {
  return (
    <div>
      <HomepageHero />
      <FeaturedCars />
      <CustomerPromise />
      <BuyingEssentials />
      <LatestNews />
    </div>
  );
}
