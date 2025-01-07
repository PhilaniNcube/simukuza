"use client";

import { Input } from "@/components/ui/input";
import { Database } from "@/utils/schema";
import {  useSearchParams } from "next/navigation";
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
import { startTransition, useState } from "react";

import { parseAsInteger, useQueryState } from "nuqs";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { searchCarsAction } from "@/actions/filter-cars";

type CarFilterProps = {
  makes: Database["public"]["Tables"]["car_makes"]["Row"][];
};

const CarFilter = ({ makes }: CarFilterProps) => {
  const searchParams = useSearchParams();
  console.log(searchParams);
  const [open, setOpen] = useState(false);


  const [conditionQuery, setConditionQuery] = useQueryState("condition", {
    defaultValue: searchParams.get("condition") || "new",
  });
  const [minYearQuery, setMinYearQuery] = useQueryState(
    "min_year",
    parseAsInteger
  );
  const [maxYearQuery, setMaxYearQuery] = useQueryState(
    "max_year",
    parseAsInteger
  );
  const [minPriceQuery, setMinPriceQuery] = useQueryState(
    "min_price",
    parseAsInteger
  );
  const [maxPriceQuery, setMaxPriceQuery] = useQueryState(
    "max_price",
    parseAsInteger
  );
  const [minMileageQuery, setMinMileageQuery] = useQueryState(
    "min_mileage",
    parseAsInteger
  );
  const [maxMileageQuery, setMaxMileageQuery] = useQueryState(
    "max_mileage",
    parseAsInteger
  );
  const [modelQuery, setModelQuery] = useQueryState("model", {
    defaultValue: "",
  });
  const [makeQuery, setMakeQuery] = useQueryState("make", {
    defaultValue: "",
  });



  return (
    <div className="max-w-xs relative isolate py-3 w-full px-3 ">
      <div className="sticky top-24">
        <p className="text-lg font-semibold text-gray-500">
          Search our inventory
        </p>
        <form
          action={() => {
            const formData = new FormData();
            formData.append("condition", conditionQuery);
            formData.append("make", makeQuery);
            formData.append("model", modelQuery);
            formData.append("min_year", String(minYearQuery));
            formData.append("max_year", String(maxYearQuery));
            formData.append("min_price", String(minPriceQuery));
            formData.append("max_price", String(maxPriceQuery));
            formData.append("min_mileage", String(minMileageQuery));
            formData.append("max_mileage", String(maxMileageQuery));

            // Call the searchCarsAction function with the form data
            searchCarsAction(formData)
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
                            setMakeQuery(currentValue);
                            setOpen(false);
                          });
                        }}
                      >
                        {m.name}
                        {/* if the make is the same as the selected make, show a check icon */}
                        {makeQuery.toLowerCase() === m.name.toLowerCase() && (
                          <Check
                            className={cn(
                              "ml-auto",
                              makeQuery.toLowerCase() ===
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
                  setMinPriceQuery(Number(e.target.value));
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
                  setMaxPriceQuery(Number(e.target.value));
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
                  setMinYearQuery(Number(e.target.value));
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
                  setMaxYearQuery(Number(e.target.value));
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
                  setMinMileageQuery(Number(e.target.value));
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
                  setMaxMileageQuery(Number(e.target.value));
                }}
              />
            </div>
          </div>
          <div className="w-full flex justify-between items-center gap-2 text-xs text-center">
            <Badge className="h-8" onClick={() => setConditionQuery("new")}>
              {conditionQuery === "new" && <Check size={16} className="mr-2" />}
              New
            </Badge>
            <Badge className="h-8" onClick={() => setConditionQuery("used")}>
              {conditionQuery === "used" && (
                <Check size={16} className="mr-2" />
              )}
              Used
            </Badge>
            <Badge
              className="h-8"
              onClick={() => setConditionQuery("recent_import")}
            >
              {conditionQuery === "recent_import" && (
                <Check size={16} className="mr-2" />
              )}
              Recent Import
            </Badge>
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
