import Image from "next/image";
import {formatDistance} from "date-fns";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const LatestNews = () => {
  const newsItems = [
    {
      title: "2024 BMW M3 Review",
      description: "The ultimate driving machine gets even better. Our review of the 2024 BMW M3 is here. Read more to find out what we think of the new M3. Is it worth the hype? ",
      category: "Review",
      image:
        "https://utfs.io/f/84aXfFFbF7G0eYpLkwPHJs6Viruw31flNKASm9MZDTnFEYat",
      date: "June 15, 2024",
      author: "John Smith",
    },
    {
      title: "Hybrid vehicle efficiency in Zimbabwe",
      description: "How hybrid vehicles are changing the game in Zimbabwe",
      category: "News",
      image:
        "https://utfs.io/f/84aXfFFbF7G0AGIpr81F4ADrImbfYUOlc86a32eSKWEixvN0",
      date: "October 20, 2024",
      author: "Sarah Johnson",
    },
    {
      title: "New Toyota Hilux Launch",
      description: "Toyota's beloved pickup gets a fresh update",
      category: "News",
      image:
        "https://utfs.io/f/84aXfFFbF7G0hGBNQooJoaVLq0KUWs6xvwimzRND3ptgdlB4",
      date: "December 13, 2024",
      author: "Mike Brown",
    },

    // {
    //   title: "Maintenance Tips for Your Car",
    //   description: "Essential tips to keep your car running smoothly",
    //   category: "Guide",
    //   image:
    //     "https://utfs.io/f/84aXfFFbF7G0YB2EBmcwb8A9K4a1cBH3RpVEvzWFMmyPkSOD",
    //   date: "November 3, 2024",
    //   author: "Tom Davis",
    // },

  ];

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-end">
          <h2 className="text-3xl text-slate-500 font-extralight text-balance leading-4 text-center mb-12">
            Latest{" "}
            <span className="italic text-accent font-extrabold">
              News &amp; Reviews
            </span>
          </h2>
        </div>

        <div className="flex justify-between items-center">
          <hr className="text-accent bg-accent w-full h-1" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 mt-2 gap-6">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 row-span-2 col-span-2 @container">
            <div className="relative aspect-video bg-gray-200">
              <Image
                width={1000}
                height={1000}
                src={newsItems[0].image}
                alt={newsItems[0].title}
                className="object-cover w-full rounded-lg @md:aspect-video"
              />
            </div>
            <div className="@md:p-6 hidden @md:block">
              <h3 className="text-xl font-semibold mb-2">
                {newsItems[0].title}
              </h3>
              <p className="text-gray-600 font-medium text-lg mb-4">
                {newsItems[0].description}
              </p>
              <div className="flex items-center justify-between text-sm text-accent">
                <p className="font-medium ">
                  <span className="text-accent">
                    {formatDistance(new Date(newsItems[0].date), new Date())}{" "}
                    ago
                  </span>{" "}
                  | <span className="">{newsItems[0].author}</span>{" "}
                </p>
              </div>
            </div>
          </div>
          <div className="col-span-1 row-span-2 flex flex-col gap-6">
            <div className="bg-white rounded-lg group overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 @container">
              <div className="relative h-full bg-gray-200 ">
                <Image
                  width={1000}
                  height={1000}
                  src={newsItems[1].image}
                  alt={newsItems[1].title}
                  className="object-cover w-full aspect-video h-full rounded-lg"
                />
                <div className="hidden group-hover:absolute group-hover:bg-slate-600/15 transition-all duration-150 inset-0 group-hover:flex justify-start items-end py-2">
                  <div className="bg-accent-foreground text-white px-4 py-2 rounded-r-2xl">
                    <p>{newsItems[1].title}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 @container group">
              <div className="relative h-full bg-gray-200">
                <Image
                  width={1000}
                  height={1000}
                  src={newsItems[2].image}
                  alt={newsItems[2].title}
                  className="object-cover w-full aspect-video h-full rounded-lg"
                />{" "}
                <div className="hidden group-hover:absolute inset-0 group-hover:flex justify-start items-end py-2 group-hover:bg-slate-600/15 transition-all duration-150">
                  <div className="bg-accent-foreground text-white px-4 py-2 rounded-r-2xl">
                    <p>{newsItems[2].title}</p>
                  </div>
                </div>
              </div>
            </div>
            <Separator className="w-full mb-3 text-accent bg-accent" />
            <div>
              <Link
                href="/services/ratings"
                className="text-accent font-semibold hover:text-accent-foreground text-xl"
                aria-description="More News & Reviews"
              >
                <span className="text-black">More</span> News &amp; Reviews
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
