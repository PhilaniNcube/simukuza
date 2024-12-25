import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Search } from "lucide-react";
import { getMakes } from "@/lib/fetchers/car-makes";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";

export default async function HomepageHero() {
  const makes = await getMakes();

  return (
    <section className="relative overflow-hidden">
      <div className="h-[600px] relative isolate">
        <Image
          src="https://utfs.io/f/84aXfFFbF7G0oAWuV3l8G4JDPBi0SnTqR5MyOlxVXdt1Lg3f"
          alt="Toyota Aqua"
          width="2000"
          height="536"
          priority
          className="w-full h-full object-cover object-center-top"
        />
        <div className="absolute inset-0 h-full">
          <div className="max-w-7xl mx-auto h-full flex items-center justify-end px-4">
            <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-extrabold">
              NEW & USED <br />{" "}
              <span className="italic font-medium text-accent">Cars </span>
              <span className="text-md">For Sale</span>
            </h1>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex md:flex-row flex-col justify-between items-start relative  md:h-[180px]">
            <div className="max-w-lg">
              <h1 className="text-4xl font-thin text-slate-500">
                The road to your{" "}
                <span className="text-accent font-extrabold italic">
                  dream car
                </span>{" "}
                starts here, no GPS needed
              </h1>
            </div>

            <Card className="w-full md:w-2/3 lg:w-1/3 shadow-xl rounded-2xl bg-white md:translate-y-[-200px]">
              <CardContent className="py-4">
                <form>
                  <div className="space-y-2">
                    <div className="relative">
                      <Input
                        id="input-26"
                        className="peer pe-9 ps-9 rounded-full shadow-lg h-12"
                        placeholder="try 'Toyota Aqua'"
                        type="search"
                      />
                      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50 ">
                        <Search
                          size={16}
                          strokeWidth={2}
                          className="stroke-accent"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-5">
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a make" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Makes</SelectLabel>
                          {makes.map((make) => (
                            <SelectItem key={make.id} value={make.name}>
                              {make.name}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select a city" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>City</SelectLabel>
                          <SelectItem value="Harare">Harare</SelectItem>
                          <SelectItem value="Bulawayo">Bulawayo</SelectItem>
                          <SelectItem value="Mutare">Mutare</SelectItem>
                          <SelectItem value="Gweru">Gweru</SelectItem>
                          <SelectItem value="Masvingo">Masvingo</SelectItem>
                          <SelectItem value="Kwekwe">Kwekwe</SelectItem>
                          <SelectItem value="Chitungwiza">
                            Chitungwiza
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <Separator className="my-5" />
                  <div className="mt-5">
                    <RadioGroup className="flex items-start justify-start gap-x-5">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="price" id="price" className="" />
                        <Label htmlFor="price">Price</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="monthly_installment"
                          id="monthly_installment"
                        />
                        <Label htmlFor="monthly_installment">
                          Monthly Installment
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-3 w-full">
                    <div className="w-full relative">
                      <span className="flex items-center justify-start absolute inset-0 pointer-events-none pl-3">
                        <small className="text-md text-slate-500">$</small>
                      </span>
                      <Input
                        id="min_price"
                        name="min_price"
                        className="pl-6"
                        placeholder="Min Price"
                        type="number"
                      />
                    </div>
                    <div className="w-full relative">
                      <span className="flex items-center justify-start absolute inset-0 pointer-events-none pl-3">
                        <small className="text-md text-slate-500">$</small>
                      </span>
                      <Input
                        id="max_price"
                        name="max_price"
                        className="pl-6"
                        placeholder="Max Price"
                        type="number"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-3 w-full">
                    <div className="w-full relative">
                      <Input
                        id="min_year"
                        name="min_year"
                        className="pl-6"
                        placeholder="Min year"
                        type="number"
                      />
                    </div>
                    <div className="w-full relative">
                      <Input
                        id="max_year"
                        name="max_year"
                        className="pl-6"
                        placeholder="Max year"
                        type="number"
                      />
                    </div>
                  </div>
                  <div className="mt-5">
                    <Button className="w-full bg-accent" type="submit">
                      Search
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
