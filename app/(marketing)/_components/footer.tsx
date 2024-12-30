import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { FaXTwitter, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {

  const year = new Date().getFullYear();

  return (
    <footer className="">
      <section className="bg-darkblue text-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-white text-3xl">
              Sign Up to our weekly{" "}
              <span className="text-lightblue italic">Newsletter</span>
            </p>
            <div className="max-w-lg">
              <form className="flex flex-row gap-x-5 items-center">
                <Input
                  placeholder="Enter your email address"
                  className="bg-white"
                />
                <Button type="submit" className="bg-lightblue text-white">
                  Subscribe
                </Button>
              </form>
              <p className="text-white font-medium text-xl mt-3">
                By continuing I understand and agree with Simukuza Auto&apos;s{" "}
                <Link href="/terms" className="text-lightblue">
                  Terms &amp; Conditions
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-lightblue">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-accent py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-start flex-col md:flex-row flex-wrap gap-4 font-light">
            <div>
              <h4 className="text-white text-xl font-bold italic">
                Simukuza Auto
              </h4>
              <ul>
                <li>
                  <Link href="/about-us" className="text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/work-with-us" className="text-white">
                    Work With Us
                  </Link>
                </li>
                <li>
                  <Link href="/feedback" className="text-white">
                    Feedback
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-white">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xl font-bold italic">Vehicles</h4>
              <ul>
                <li>
                  <Link href="/cars/new" className="text-white">
                    New Cars
                  </Link>
                </li>
                <li>
                  <Link href="/cars/used" className="text-white">
                    Used Cars
                  </Link>
                </li>
                <li>
                  <Link href="/cars/recent_imports" className="text-white">
                    Recent Imports
                  </Link>
                </li>
                <li>
                  <Link href="/cars/commercial" className="text-white">
                    Commercial
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xl font-bold italic">Customers</h4>
              <ul>
                <li>
                  <Link href="/customers/trade_in" className="text-white">
                    Trade In
                  </Link>
                </li>
                <li>
                  <Link href="/customers/sell_my_car" className="text-white">
                    Sell My Car
                  </Link>
                </li>
                <li>
                  <Link href="/customers/safety" className="text-white">
                    Safety & Security
                  </Link>
                </li>
                <li>
                  <Link href="/customers/terms" className="text-white">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/customers/policy" className="text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/customers/code" className="text-white">
                    Code of Advertising
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white text-xl font-bold italic">Services</h4>
              <ul>
                <li>
                  <Link href="/services/car_finance" className="text-white">
                    Car Finance
                  </Link>
                </li>
                <li>
                  <Link href="/services/car_insurance" className="text-white">
                    Car Insurance
                  </Link>
                </li>
                <li>
                  <Link href="/services/car_service" className="text-white">
                    Car Service
                  </Link>
                </li>
                <li>
                  <Link href="/services/ratings" className="text-white">
                    Ratings & Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/services/help" className="text-white">
                    Help & Avice
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-white text-xl font-bold italic">Dealers</h4>
              <ul>
                <li>
                  <Link href="/dealers/offers" className="text-white">
                    Offers
                  </Link>
                </li>
                <li>
                  <Link href="/dealers/manage" className="text-white">
                    Manage
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="border-t border-white my-8" />
          <div className="flex flex-col md:flex-row justify-center text-center">
            <div className="text-white text-xl md:text-[40px] italic flex flex-col md:flex-row items-center">
              <p>
                Join&nbsp;<span className="font-bold">Our Tribe</span>&nbsp;on
                all socials
              </p>
              <div className="flex flex-row gap-4 items-center">
                <span>
                  <FaFacebook className="ml-2" />
                </span>
                <span>
                  <FaXTwitter className="ml-2" />
                </span>
                <span>
                  <FaInstagram className="ml-2" />
                </span>
                <span>
                  <FaTiktok className="ml-2" />
                </span>
                <span>
                  <FaYoutube className="ml-2" />
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-7xl mx-auto px-4">
            <Image
              src="/images/logo_white.svg"
              alt="Simukuza Auto Logo"
              width={200}
              height={50}
              className="w-64 lg:w-[400px] object-cover"
            />
            <p className="text-[20px] text-white shrink-0">
              A Division of{" "}
              <span className="font-bold">Simukuza Enterprises (PVT) LTD</span>{" "}
              &copy; {year}
            </p>

            <Separator className="max-w-md " />
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
