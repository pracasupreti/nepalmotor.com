
import Image from "next/image";

const nepalCarNews = [
  {
    image: "/news/byd-atto-4.jpg",
    title: "BYD Atto 3 EV Sees Price Drop in Nepal: What It Means for Buyers",
  },
  {
    image: "/news/Tata-Nexon-Headlift.jpg",
    title: "Tata Nexon Facelift Launched: New Features & Pricing Details",
  },
  {
    image: "/news/Suzuki-Fronx.jpg",
    title: "First Drive: Is the new Suzuki Fronx the perfect city SUV for Kathmandu?",
  },
  {
    image: "/news/Vehicle-Tax-Revisions.jpg",
    title: "Understanding the Latest Vehicle Tax Revisions in Nepal for 2081/82",
  },
];

const LatestNews = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8 py-12">
      <h2 className="text-2xl text-center md:text-3xl font-bold mb-10 text-black">
        Latest Updates
      </h2>
     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:items-start">
        
        {/* Left big news item */}
        <div className="md:row-span-2 md:col-span-1">
          {/* Image Container */}
          <div className="relative h-64 md:h-[30rem] w-full rounded-lg overflow-hidden bg-gray-200">
            <Image
              src={nepalCarNews[0].image}
              alt={nepalCarNews[0].title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 33vw"
              priority
            />
          </div>
          {/* Text content BELOW the image */}
          <div className="mt-4">
            {/* Type badge has been removed */}
            <h3 className="text-xl font-bold text-gray-900">
              {nepalCarNews[0].title}
            </h3>
          </div>
        </div>

        {/* Right side: two on top, one on bottom */}
        <div className="flex flex-col gap-8 md:col-span-2">
          {/* Top two small items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {nepalCarNews.slice(1, 3).map((item, i) => (
              <div key={i}>
                {/* Image Container - Height increased and consistent */}
                <div className="relative h-48 w-full rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 16vw"
                  />
                </div>
                {/* Text content BELOW the image */}
                <div className="mt-3">
                  {/* Type badge has been removed */}
                  <h3 className="text-base font-bold text-gray-900">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          {/* Bottom single item */}
          <div>
            {/* Image Container - Height increased and consistent */}
            <div className="relative h-48 w-full rounded-lg overflow-hidden bg-gray-200">
              <Image
                src={nepalCarNews[3].image}
                alt={nepalCarNews[3].title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            {/* Text content BELOW the image */}
            <div className="mt-3">
              {/* Type badge has been removed */}
              <h3 className="text-base font-bold text-gray-900">
                {nepalCarNews[3].title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestNews;