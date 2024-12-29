import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";


const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between">
          <p className="text-white text-2xl">
            Sign Up to our weekly{" "}
            <span className="text-blue-600 italic">Newsletter</span>
          </p>
          <div className="max-w-lg">
            <form className="flex flex-row gap-x-5 items-center">
              <Input placeholder="Enter your email address" className="bg-white" />
              <Button type="submit" className="bg-blue-600 text-white">Subscribe</Button>
            </form>
            <p className="text-white font-medium text-xl mt-3">
              By continuing I understand and agree with Simukuza Auto&apos;s {" "}
              <Link href="/terms" className="text-blue-600">
                Terms &amp; Conditions
              </Link>{" "} and <Link href="/privacy" className="text-blue-600">Privacy Policy</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
