import { CircleCheck } from "lucide-react";

const CustomerPromise = () => {
  return (
    <section className="text-white px-4 lg:px-0">
      <div className=" max-w-7xl mx-auto px-4 py-16 ">
        <div className="bg-darkblue grid grid-cols-4 gap-4 px-4 py-16 rounded-2xl">
          <div className="col-span-4 md:col-span-2">
            <h3 className="text-xl md:text-2xl lg:text-3xl text-balance md:leading-4">
              Every vehicle we deliver comes with our{" "}
              <span className="text-lightblue underline underline-white">
                5 point promise
              </span>{" "}
              as standard
            </h3>
            <p className="text-xs md:text-base lg:text-lg mt-4">
              All <span className="italic text-lightblue">Simukuza Auto</span>{" "}
              vehicles go through a detailed inspection by our manufacturer
              trained technicians for your peace of mind
            </p>
          </div>
          <div className="col-span-4 md:col-span-2 gap-2 grid md:grid-cols-2 ">
            <div className="flex items-center space-x-2">
              <CircleCheck className="text-lightblue h-6 w-6 shrink-0" />
              <p className="text-white text-sm md:text-md">
                A comprehensive{" "}
                <span className="text-lightblue">multi-point inspection</span>
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <CircleCheck className="text-lightblue h-6 w-6 shrink-0" />
              <p className="text-white text-sm md:text-md">
                All vehicles delivered with{" "}
                <span className="text-lightblue">9 months minimum </span>MOT
                test
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <CircleCheck className="text-lightblue h-6 w-6 shrink-0" />
              <p className="text-white text-sm md:text-md">
                A completed detailed{" "}
                <span className="text-lightblue">vehicle history </span>&
                mileage check
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <CircleCheck className="text-lightblue h-6 w-6 shrink-0" />
              <p className="text-white text-sm md:text-md">
                A <span className="text-lightblue">showroom valet </span>on all
                vehicles before delivery
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <CircleCheck className="text-lightblue h-6 w-6 shrink-0" />
              <p className="text-white text-sm md:text-md">
                Tyres, brakes and service
                <span className="text-lightblue"> to shcedule</span>
              </p>
            </div>
          </div>
        </div>{" "}
      </div>
    </section>
  );
};
export default CustomerPromise;
