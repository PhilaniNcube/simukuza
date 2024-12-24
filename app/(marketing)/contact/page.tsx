import { Metadata } from "next";
import {  Phone, Mail, Clock } from "lucide-react";
import { GoogleMapsEmbed } from "@next/third-parties/google";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact Us | Simukuza Automotive",
  description:
    "Get in touch with Simukuza Automotive for any inquiries about our vehicles or services.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24">


      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Contact Us</CardTitle>
            <CardDescription>
              Fill out the form below and we&apos;ll get back to you as soon as
              possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>

        <div>
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="flex items-center">
                <Phone className="mr-2" /> 077 304 2178
              </p>
              <p className="flex items-center">
                <Mail className="mr-2" /> info@simukuza.co.zw
              </p>
              <p className="flex items-center">
                <Clock className="mr-2" /> Mon-Fri: 9am-6pm, Sat: 10am-4pm, Sun:
                Closed
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Location</CardTitle>
            </CardHeader>
            <CardContent>
              <GoogleMapsEmbed
                apiKey="AIzaSyA7PfdqRLo_exrxYW-cMjEDkOlPHSVWVds"
                height={200}
                width="100%"
                mode="place"
                q="1 Bates St, Harare"
              />
            </CardContent>
            <CardFooter>
              <p>1 Bates St, Harare</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Name
        </label>
        <Input id="name" placeholder="Your Name" required />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <Input id="email" type="email" placeholder="you@example.com" required />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-1">
          Phone (optional)
        </label>
        <Input id="phone" type="tel" placeholder="(555) 123-4567" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Message
        </label>
        <Textarea id="message" placeholder="How can we help you?" required />
      </div>
      <Button type="submit">Send Message</Button>
    </form>
  );
}
