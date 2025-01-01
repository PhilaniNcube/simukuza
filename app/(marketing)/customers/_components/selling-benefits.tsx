import {
  Check,
  Users,
  FileText,
  Image,
  Shield,
  HeadphonesIcon,
  Target,
  User,
  Building,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function SellingBenefits() {
  const benefits = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Reach a Wider Audience",
      description:
        "Tap into a large and engaged community of car buyers actively searching for vehicles in Harare and surrounding areas.",
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Simple and Easy Listing Process",
      description:
        "Our user-friendly platform makes listing your car quick and straightforward. You can have your ad live in minutes!",
    },
    {
      icon: <Image className="h-6 w-6" />,
      title: "Highlight Your Car's Best Features",
      description:
        "Upload multiple high-quality photos and provide detailed descriptions to attract the right buyers.",
    },
    {
      icon: <Check className="h-6 w-6" />,
      title: "Flexible Listing Options",
      description:
        "We offer different listing options to suit your needs and budget.",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure and Reliable Platform",
      description:
        "We prioritize the security of your information and provide a trustworthy environment for transactions.",
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6" />,
      title: "Dedicated Support",
      description:
        "Our customer support team is here to assist you with any questions or issues you may encounter during the selling process.",
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Attract Serious Buyers",
      description:
        "Our platform is designed to connect genuine sellers with motivated buyers, minimizing wasted time.",
    },
    {
      icon: <User className="h-6 w-6" />,
      title: "For Private Sellers",
      description:
        "Sell your car independently and get the price you deserve without the hassle of traditional methods.",
    },
    {
      icon: <Building className="h-6 w-6" />,
      title: "For Dealerships",
      description:
        "Showcase your inventory to a broader online audience and generate more leads.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-6xl font-light text-center mb-8 text-lightblue">
          Why Choose Simukuza Auto to Sell Your Car?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit) => (
            <Card key={benefit.title} className="bg-lightgrey" >
              <CardHeader>
                <CardTitle className="flex items-center text-darkblue">
                  {benefit.icon}
                  <span className="ml-2 text-accent">{benefit.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
