import { LocaleRouteNormalizer } from "next/dist/server/normalizers/locale-route-normalizer";
import Image from "next/image";

const news = [
  {
    image: "/news/toyota.jpg",
    title: "The Toyota Corolla Cross Is a Little Better-Looking for 2026",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "/news/corvette.jpg",
    title: "All 2026 Chevy Corvettes Are Getting a Sweet New Interior",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "/news/genesis.jpg",
    title: "2026 Genesis GV70 First Drive: Making a Great SUV Even Better",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
  {
    image: "/news/toyotavsgenesis.jpg",
    title:
      "EDMUNDS U-DRAGS: Toyota GR Corolla vs. Hyundai Elantra N | Quarter Mile, Handling, & More",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
  },
];

const LatestNews = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-2 md:px-6 py-5 lg:px-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black">
        Latest Car News From Our Experts
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Left big news image */}
        <div className="md:row-span-2 md:col-span-1">
          <div className="relative h-64 md:h-[32rem] w-full rounded-lg overflow-hidden group">
            <Image
              src={news[0].image}
              alt={news[0].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4">
              <div className="overflow-hidden transition-all duration-500 ease max-h-8 group-hover:max-h-40">
                <p className="text-white text-lg font-semibold drop-shadow">
                  {news[0].title}
                </p>
                <section className="text-white text-sm mt-2">
                  {news[0].description}
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: two on top, one on bottom */}
        <div className="flex flex-col gap-4 md:col-span-2 h-full">
          <div className="grid grid-cols-2 gap-4 h-1/2">
            {news.slice(1, 3).map((item, i) => (
              <div
                key={i}
                className="relative h-32 md:h-[15.5rem] w-full rounded-lg overflow-hidden group"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 16vw"
                />

                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-2">
                  <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-10 group-hover:max-h-40">
                    {/* Title - always visible */}
                    <p className="text-white text-xs md:text-base font-semibold drop-shadow">
                      {item.title}
                    </p>

                    {/* Description - revealed on hover */}
                    <section className="text-white text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {item.description}
                    </section>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="relative h-32 md:h-[15.5rem] w-full rounded-lg overflow-hidden group">
            <Image
              src={news[3].image}
              alt={news[3].title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/80 to-transparent p-4">
              <div className="overflow-hidden transition-all duration-500 ease max-h-8 group-hover:max-h-40">
                <p className="text-white text-lg font-semibold drop-shadow">
                  {news[3].title}
                </p>
                <section className="text-white text-sm mt-2">
                  {news[3].description}
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
