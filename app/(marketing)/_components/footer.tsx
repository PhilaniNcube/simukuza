import { CircleCheck } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2">
            <h3 className="text-xl md:text-2xl lg:text-3xl text-balance leading-4">
              Every vehicle we deliver comes with our{" "}
              <span className="text-sky-500 underline underline-white">
                5 point promise
              </span>{" "}
              as standard
            </h3>
            <p className="text-sm md:text-base lg:text-lg mt-4">
              All Chorley Group vehicles go through a detailed inspection by our
              manufacturer trained technicians for your peace of mind
            </p>
          </div>
          <div className="col-span-2 gap-2 grid grid-cols-2 ">
            <div className="flex items-center space-x-2">
              <CircleCheck className="text-blue-500 h-6 w-6 shrink-0" />
              <p className="text-white text-md">
                A comprehensive{" "}
                <span className="text-blue-500">multi-point inspection</span>
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <CircleCheck className="text-blue-500 h-6 w-6 shrink-0" />
              <p className="text-white text-md">
                All vehicles delivered with{" "}
                <span className="text-blue-500">9 months minimum </span>MOT test
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <CircleCheck className="text-blue-500 h-6 w-6 shrink-0" />
              <p className="text-white text-md">
                A completed detailed{" "}
                <span className="text-blue-500">vehicle history </span>& mileage
                check
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <CircleCheck className="text-blue-500 h-6 w-6 shrink-0" />
              <p className="text-white text-md">
                A <span className="text-blue-500">showroom valet </span>on all
                vehicles before delivery
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <CircleCheck className="text-blue-500 h-6 w-6 shrink-0" />
              <p className="text-white text-md">
                Tyres, brakes and service
                <span className="text-blue-500"> to shcedule</span>
              </p>
            </div>
          </div>
        </div>{" "}
        <div className="flex justify-end mt-3">
          <h4 className="text-xl md:text-2xl lg:text-3xl text-balance leading-4">
            <span className="text-blue-500">Chorley</span>Care
          </h4>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
