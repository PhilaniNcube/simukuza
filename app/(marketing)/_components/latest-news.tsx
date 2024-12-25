import Image from "next/image";
import {formatDistance} from "date-fns";

const LatestNews = () => {
  const newsItems = [
    {
      title: "2024 BMW M3 Review",
      description: "The ultimate driving machine gets even better",
      category: "Review",
      image:
        "https://utfs.io/f/84aXfFFbF7G0eYpLkwPHJs6Viruw31flNKASm9MZDTnFEYat",
      date: "March 15, 2024",
      author: "John Smith",
    },
    {
      title: "Hybrid vehicle efficiency in Zimbabwe",
      description: "How hybrid vehicles are changing the game in Zimbabwe",
      category: "News",
      image:
        "https://utfs.io/f/84aXfFFbF7G0AGIpr81F4ADrImbfYUOlc86a32eSKWEixvN0",
      date: "March 14, 2024",
      author: "Sarah Johnson",
    },
    {
      title: "New Toyota Hilux Launch",
      description: "Toyota's beloved pickup gets a fresh update",
      category: "News",
      image:
        "https://utfs.io/f/84aXfFFbF7G0hGBNQooJoaVLq0KUWs6xvwimzRND3ptgdlB4",
      date: "March 13, 2024",
      author: "Mike Brown",
    },

    {
      title: "Maintenance Tips for Your Car",
      description: "Essential tips to keep your car running smoothly",
      category: "Guide",
      image:
        "https://utfs.io/f/84aXfFFbF7G0YB2EBmcwb8A9K4a1cBH3RpVEvzWFMmyPkSOD",
      date: "March 11, 2024",
      author: "Tom Davis",
    },

  ];

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-slate-500 font-extralight text-balance leading-4 text-center mb-12">
          Latest{" "}
          <span className="italic text-accent font-extrabold">
            News &amp; Reviews
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-video relative bg-gray-200">
                <Image
                  width={1000}
                  height={1000}
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-full"
                />

              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <p className="font-extralight italic">
                    {" "}
                    {item.category} {" "}|{" "}
                    <span className="text-accent">
                      {formatDistance(new Date(item.date), new Date())} ago
                    </span>
                  </p>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
