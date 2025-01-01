"use client";

import { Input } from "@/components/ui/input";
import { Database } from "@/utils/schema";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { startTransition, useOptimistic, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useQueryState } from "nuqs";
import { Label } from "@/components/ui/label";

type CarFilterProps = {
  makes: Database["public"]["Tables"]["car_makes"]["Row"][];
};

const CarFilter = ({ makes }: CarFilterProps) => {
  const pathname = usePathname();

  // get the last item in the array
  const path = pathname.split("/")[3];
  console.log(path);

  const searchParams = useSearchParams();
  console.log(searchParams);
  const [open, setOpen] = useState(false);

  const make = searchParams.get("make") || "";
  const [optimisticMake, setOptimisticMake] = useOptimistic(make);

  const [conditionQuery, setConditionQuery] = useQueryState("condition", {
    defaultValue: path,
  });
  const [minYearQuery, setMinYearQuery] = useQueryState("min_year");
  const [maxYearQuery, setMaxYearQuery] = useQueryState("max_year");
  const [minPriceQuery, setMinPriceQuery] = useQueryState("min_price");
  const [maxPriceQuery, setMaxPriceQuery] = useQueryState("max_price");
  const [minMileageQuery, setMinMileageQuery] = useQueryState("min_mileage");
  const [maxMileageQuery, setMaxMileageQuery] = useQueryState("max_mileage");
  const [modelQuery, setModelQuery] = useQueryState("model", {
    defaultValue: "",
  });
  const [makeQuery, setMakeQuery] = useQueryState("make", {
    defaultValue: "",
  });

  const router = useRouter();

  return (
    <div className="max-w-xs relative isolate py-3 w-full px-3 ">
      <div className="sticky top-24">
        <p className="text-lg font-semibold text-gray-500">
          Search our inventory
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            router.push(
              `/cars/condition/${conditionQuery}?make=${makeQuery}&model=${modelQuery}&min_year=${minYearQuery}&max_year=${maxYearQuery}&min_price=${minPriceQuery}&max_price=${maxPriceQuery}&min_mileage=${minMileageQuery}&max_mileage=${maxMileageQuery}`
            );
          }}
          className="flex flex-col gap-2"
        >
          <div>
            <Label htmlFor="model">Model</Label>
            <Input
              name="model"
              type="text"
              placeholder="Search model"
              className="p-2 border border-gray-300 capitalize"
              value={modelQuery.toLowerCase()}
              onChange={(e) => {
                setModelQuery(e.target.value.toLowerCase());
              }}
            />
          </div>

          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="justify-between"
              >
                {makeQuery
                  ? makes.find(
                      (m) => m.name.toLowerCase() === makeQuery.toLowerCase()
                    )?.name
                  : "Select make"}
                <ChevronsUpDown />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0">
              <Command>
                <CommandInput
                  name="make"
                  placeholder="Search make..."
                  className="h-9"
                />
                <CommandList>
                  <CommandEmpty>No makes found</CommandEmpty>
                  <CommandGroup title="Makes">
                    {makes.map((m) => (
                      <CommandItem
                        key={m.id}
                        value={m.name.toLowerCase()}
                        onFocus={(e) => {
                          console.log("Focus", e);
                        }}
                        onSelect={(currentValue) => {
                          startTransition(() => {
                            setOptimisticMake(currentValue);
                            // update the url with the new search params
                            // this will trigger a page refresh
                            setMakeQuery(currentValue);
                            setOpen(false);
                          });
                        }}
                      >
                        {m.name}
                        {/* if the make is the same as the selected make, show a check icon */}
                        {optimisticMake.toLowerCase() ===
                          m.name.toLowerCase() && (
                          <Check
                            className={cn(
                              "ml-auto",
                              optimisticMake.toLowerCase() ===
                                m.name.toLowerCase() && "text-blue-500"
                            )}
                          />
                        )}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          {/* Create an input that marks a range of min and max price in the form of a range */}
          <div className="flex gap-2">
            <div>
              <Label htmlFor="min_price">Minimum Price</Label>
              <Input
                name="min_price"
                type="number"
                placeholder="Min Price"
                className="p-2 border border-gray-300"
                value={Number(minPriceQuery)}
                onChange={(e) => {
                  setMinPriceQuery(e.target.value);
                }}
              />
            </div>
            <div>
              <Label htmlFor="max_price">Maximum Price</Label>
              <Input
                name="max_price"
                type="number"
                placeholder="Max Price"
                className="p-2 border border-gray-300"
                value={Number(maxPriceQuery)}
                onChange={(e) => {
                  setMaxPriceQuery(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="flex gap-2">

            <div>
              <Label htmlFor="min_year">Min Year</Label>
              <Input
                name="min_year"
                type="number"
                placeholder="Min Year"
                className="p-2 border border-gray-300"
                value={Number(minYearQuery)}
                onChange={(e) => {
                  setMinYearQuery(e.target.value);
                }}
              />
            </div>
            <div>
              <Label htmlFor="max_year">Max Year</Label>
              <Input
                name="max_year"
                type="number"
                placeholder="Max Year"
                className="p-2 border border-gray-300"
                value={Number(maxYearQuery)}
                onChange={(e) => {
                  setMaxYearQuery(e.target.value);
                }}
              />{" "}
            </div>
          </div>
          <div className="flex gap-2">
            <div>
              <Label htmlFor="min_mileage">Min Mileage</Label>
              <Input
                name="min_mileage"
                type="number"
                placeholder="Min Mileage"
                className="p-2 border border-gray-300"
                value={Number(minMileageQuery)}
                onChange={(e) => {
                  setMinMileageQuery(e.target.value);
                }}
              />
            </div>
            <div>
              <Label htmlFor="max_mileage">Max Mileage</Label>
              <Input
                name="max_mileage"
                type="number"
                placeholder="Max Mileage"
                className="p-2 border border-gray-300"
                value={Number(maxMileageQuery)}
                onChange={(e) => {
                  setMaxMileageQuery(e.target.value);
                }}
              />
            </div>
          </div>
          <div>
            <Select
              value={conditionQuery}
              onValueChange={setConditionQuery}
              name="condition"
            >
              <SelectTrigger className="">
                <SelectValue placeholder="Select condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Condition</SelectLabel>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="used">Used</SelectItem>
                  <SelectItem value="recent_import">Recent Import</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Button type="submit" className="bg-accent relative text-white">
            Search
          </Button>
        </form>
      </div>
    </div>
  );
};
export default CarFilter;
