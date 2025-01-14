import React from "react";
import img1 from "../../assets/img1.png";

const ServicesData = [
  {
    id: 1,
    img: img1,
    name: "Espresso",
    description:
      "Rich and bold flavor, served perfectly hot. Ideal for a quick energy boost.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: img1,
    name: "Cappuccino",
    description:
      "A perfect blend of espresso, steamed milk, and foam for a creamy experience.",
    aosDelay: "200",
  },
  {
    id: 3,
    img: img1,
    name: "Latte",
    description:
      "Smooth and creamy, with a rich layer of milk to complement the espresso.",
    aosDelay: "300",
  },
];

const Services = () => {
  return (
    <>
    <span id="services"></span>
      <div className="py-10 bg-gray-100">
        <div className="container">
          {/* header title */}
          <div data-aos="fade-up" className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              Best Coffee For You
            </h1>
          </div>

          {/* services card section */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-10 
         place-items-center"
          >
            {ServicesData.map((data) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={data.id}
                  className="rounded-2xl bg-white hover:bg-primary hover:text-white shadow-xl 
                 duration-300 max-w-[300px] group relative p-5 text-center"
                >
                  {/* image section */}
                  <div className="h-[122px] flex justify-center items-center mb-5">
                    <img
                      src={data.img}
                      // alt={data.name}
                      className="w-[120px] sm:w-[150px] block mx-auto 
                                 translate-y-0 group-hover:scale-110 
                                 group-hover:rotate-6 duration-300"
                    />
                  </div>

                  {/* text content */}
                  <div className="p-4 text-center">
                    <h2 className="text-xl font-bold">{data.name}</h2>
                    <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                      {data.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
