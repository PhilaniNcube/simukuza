import { helpArticles } from "@/lib/fetchers/help-articles";
import { cn } from "@/lib/utils";
import Image from "next/image";

const HelpPageHero = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-start mb-4">
          <div className=" rounded-l-full rounded-tr-full bg-accent w-fit p-2 pr-5 font-extrabold text-white shrink-0 border-b-[1px] border-b-accent">
            <h2 className="text-balance leading-4 text-center uppercase text-xs md:text-md lg:text-2xl">
              Featured Articles
            </h2>
          </div>
          <div className="flex relative bg-white w-full  border-b-[1px] border-b-accent ">
            <div className="flex w-full justify-end">
              <h2 className="text-md lg:text-3xl text-slate-500 font-extralight text-balance">
                Help{" "}
                <span className="italic text-accent font-extrabold">
                  Articles
                </span>
              </h2>
            </div>
          </div>
        </div>

        {/* Help Articles */}
        <div className="grid lg:grid-cols-3 lg:grid-row-2 gap-6">
          {helpArticles.map((article, index) => (
            <div
              key={article.title}
              className={cn(
                "bg-white rounded-lg shadow-md overflow-hidden @container",
                index === 0 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
              )}
            >
              <div className="relative">
                <Image
                  src={article.mainImage[0].url}
                  alt={article.title}
                  className={cn(
                    "object-cover w-full h-full rounded-t-lg",
                    index === 0 ? "aspect-auto" : "aspect-video"
                  )}
                  width={1920}
                  height={1080}
                />
              </div>
              <div>
                <div className="p-6">
                  <h3 className="text-sm @lg:text-xl font-semibold @md:font-medium mb-2">
                    {article.title}
                  </h3>
                  <p
                    className={cn(
                      "text-accent font-light mb-4",
                      index === 0 ? "line-clamp-4" : "line-clamp-1 text-xs"
                    )}
                  >
                    {article.content}
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
export default HelpPageHero;
