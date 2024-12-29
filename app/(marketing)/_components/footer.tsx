import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="">
      <section className="bg-blue-950 text-white">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-white text-2xl">
              Sign Up to our weekly{" "}
              <span className="text-blue-600 italic">Newsletter</span>
            </p>
            <div className="max-w-lg">
              <form className="flex flex-row gap-x-5 items-center">
                <Input
                  placeholder="Enter your email address"
                  className="bg-white"
                />
                <Button type="submit" className="bg-blue-600 text-white">
                  Subscribe
                </Button>
              </form>
              <p className="text-white font-medium text-xl mt-3">
                By continuing I understand and agree with Simukuza Auto&apos;s{" "}
                <Link href="/terms" className="text-blue-600">
                  Terms &amp; Conditions
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-blue-600">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-accent py-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 font-light">
            <div>
              <h4 className="text-white text-xl font-bold">Simukuza Auto</h4>
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
              <h4 className="text-white text-xl font-bold">Dealers</h4>
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
            <div>
              <h4 className="text-white text-xl font-bold">Vehicles</h4>
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
              <h4 className="text-white text-xl font-bold">Services</h4>
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
              <h4 className="text-white text-xl font-bold">Customers</h4>
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
          </div>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
