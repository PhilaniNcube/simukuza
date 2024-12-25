import BuyingEssentials from "./_components/buying-essentials";
import FeaturedCars from "./_components/featured-cars";
import HomepageHero from "./_components/homepage-hero";
import LatestNews from "./_components/latest-news";

export default function Home() {
  return (
    <div>
      <HomepageHero />
      <FeaturedCars />
      <BuyingEssentials />
      <LatestNews />
    </div>
  );
}
