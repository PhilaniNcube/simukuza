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
      <div className="h-[300px] md:h-[600px] relative isolate">
        <Image
          src="https://utfs.io/f/84aXfFFbF7G0Rb1aZPC1b4xycaLGKhZkQFAwzdC0SEJtMopj"
          alt="Toyota Aqua"
          width="2500"
          height="800"
          quality={100}
          priority
          className="hidden md:block w-full h-full object-cover object-center-top"
        />
        <Image
          src="https://utfs.io/f/84aXfFFbF7G0joVrhnqOzQ8vq1sG36wDF9XZtnAJrpfk0l2x"
          alt="Toyota Aqua"
          width="20000"
          height="1000"
          quality={100}
          priority
          className="block md:hidden w-full h-full object-cover object-center-top"
        />
      </div>
      <div className="pt-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col-reverse md:flex-row justify-between items-start relative  md:h-[180px]">
            <div className="max-w-lg">
              <h1 className="text-3xl md:text-4xl font-thin text-darkgrey">
                The road to your <br />
                <span className="text-accent font-extrabold italic">
                  dream car
                </span>{" "}
                starts here <br />
                <hr className="inline-block w-12 h-2 border-t border-t-darkgrey text-darkgrey" />{" "}
                no GPS needed
              </h1>
            </div>

            <Card className="w-full md:w-2/3 lg:w-[520px] shadow-xl rounded-2xl bg-accent-foreground text-white md:text-black md:bg-white md:translate-y-[-200px]">
              <CardContent className="py-4">
                <form>
                  <div className="space-y-2">
                    <div className="relative">
                      <Input
                        id="input-26"
                        className="peer pe-9 ps-9 rounded-full shadow-lg h-12 placeholder:text-white md:placeholder:text-slate-400"
                        placeholder="try 'Toyota Aqua'"
                        type="search"
                        name="search_term"
                      />
                      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50 ">
                        <Search
                          size={16}
                          strokeWidth={2}
                          className="stroke-white md:stroke-accent"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-5">
                    <Select name="make">
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
                    <Select name="condition">
                      <SelectTrigger className="w-full">
                        <SelectValue
                          placeholder="Select condition"
                          className=""
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Condition</SelectLabel>
                          <SelectItem value="new">New</SelectItem>
                          <SelectItem value="used">Used</SelectItem>
                          <SelectItem value="recent_import">
                            Recent Import
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <Separator className="my-5" />
                  <div className="mt-5">
                    <RadioGroup
                      name="price"
                      className="flex items-start justify-start gap-x-5"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="price" id="price" className="" />
                        <Label htmlFor="price">Price</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem
                          value="monthly_installment"
                          id="monthly_installment"
                          className=""
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
                        <small className="text-md md:text-slate-500">$</small>
                      </span>
                      <Input
                        id="min_price"
                        name="min_price"
                        className="pl-6 placeholder:text-slate-50 lg:placeholder:text-slate-500"
                        placeholder="Min Price"
                        type="number"
                      />
                    </div>
                    <div className="w-full relative">
                      <span className="flex items-center justify-start absolute inset-0 pointer-events-none pl-3">
                        <small className="text-md md:text-slate-500">$</small>
                      </span>
                      <Input
                        id="max_price"
                        name="max_price"
                        className="pl-6 placeholder:text-slate-50 lg:placeholder:text-slate-500"
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
                        className="pl-6 placeholder:text-slate-50 lg:placeholder:text-slate-500"
                        placeholder="Min year"
                        type="number"
                      />
                    </div>
                    <div className="w-full relative">
                      <Input
                        id="max_year"
                        name="max_year"
                        className="pl-6 placeholder:text-slate-50 lg:placeholder:text-slate-500"
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
