"use client";
import { Database } from "@/utils/schema";

import { startTransition, useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import { CircleDashed } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { updateCar } from "@/actions/update-car-action";





type UpdateCarFormProps = {
  car: Database['public']['Tables']['cars']['Row'];
  makes: Database['public']['Tables']['car_makes']['Row'][];
}

const UpdateCarForm = ({car, makes}:UpdateCarFormProps) => {


  const [state, formAction, isPending] = useActionState(updateCar, undefined);







  return (
    <form
      action={(formData: FormData) => {
        startTransition(() => {
          formAction(formData);
        });
      }}
      className="space-y-6 max-w-4xl p-6 bg-white rounded-lg shadow-md"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Input type="hidden" name="id" value={car.id} />
          <Label htmlFor="make" className="block mb-2">
            Make
          </Label>
          <Select name="make" defaultValue={car.make}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a car make" />
            </SelectTrigger>
            <SelectContent>
              {makes.map((make) => (
                <SelectItem key={make.id} value={make.name}>
                  {make.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          {state?.errors?.make && (
            <p className="text-red-500 text-sm mt-1">{state?.errors?.make}</p>
          )}
        </div>

        <div>
          <Label htmlFor="model" className="block mb-2">
            Model
          </Label>
          <Input
            id="model"
            name="model"
            type="text"
            defaultValue={car.model}
            className="w-full"
          />

          {state?.errors?.model && (
            <p className="text-red-500 text-sm mt-1">{state?.errors?.model}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="capacity" className="block mb-2">
            Capacity
          </Label>
          <Input
            id="capacity"
            type="number"
            step="0.1"
            name="capacity"
            defaultValue={car.capacity}
            className="w-full"
          />

          {state?.errors?.capacity && (
            <p className="text-red-500 text-sm mt-1">
              {state?.errors?.capacity}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="condition" className="block mb-2">
            Condition
          </Label>
          <Select name="condition" defaultValue={car.condition}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a car condition" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">New</SelectItem>
              <SelectItem value="used">Used</SelectItem>
              <SelectItem value="recent_import">Recent Import</SelectItem>
            </SelectContent>
          </Select>

          {state?.errors?.condition && (
            <p className="text-red-500 text-sm mt-1">
              {state?.errors?.condition}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Label htmlFor="transmission" className="block mb-2">
            Transmission
          </Label>
          <Select name="transmission" defaultValue={car.transmission}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select transmission" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="automatic">Automatic</SelectItem>
              <SelectItem value="manual">Manual</SelectItem>
            </SelectContent>
          </Select>

          {state?.errors?.transmission && (
            <p className="text-red-500 text-sm mt-1">
              {state?.errors?.transmission}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="engine_type" className="block mb-2">
            Engine Type
          </Label>
          <Select name="engine_type" defaultValue={car.engine_type}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select engine type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="petrol">Petrol</SelectItem>
              <SelectItem value="diesel">Diesel</SelectItem>
              <SelectItem value="hybrid">Hybrid</SelectItem>
              <SelectItem value="electric">Electric</SelectItem>
            </SelectContent>
          </Select>

          {state?.errors?.engine_type && (
            <p className="text-red-500 text-sm mt-1">
              {state?.errors?.engine_type}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="year" className="block mb-2">
            Year
          </Label>
          <Input
            id="year"
            type="number"
            name="year"
            defaultValue={car.year}
            className="w-full"

          />

          {state?.errors?.year && (
            <p className="text-red-500 text-sm mt-1">{state?.errors?.year}</p>
          )}
        </div>

        <div>
          <Label htmlFor="mileage" className="block mb-2">
            Mileage
          </Label>
          <Input
            id="mileage"
            type="number"
            defaultValue={car.mileage}
            name="mileage"
            className="w-full"
            step={100}
          />

          {state?.errors?.mileage && (
            <p className="text-red-500 text-sm mt-1">
              {state?.errors?.mileage}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="price" className="block mb-2">
            Price
          </Label>
          <Input
            id="price"
            type="number"
            step="0.01"
            name="price"
            defaultValue={car.price}
            className="w-full"
          />

          {state?.errors?.price && (
            <p className="text-red-500 text-sm mt-1">{state?.errors?.price}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="description" className="block mb-2">
          Description
        </Label>
        <Textarea
          id="description"
          name="description"
          defaultValue={car.description}
          className="w-full h-32"
        />

        {state?.errors?.description && (
          <p className="text-red-500 text-sm mt-1">
            {state?.errors?.description}
          </p>
        )}
      </div>

      <div className="flex">
        <Button
          type="submit"
          disabled={isPending}
          className="px-6 py-2 min-w-[200px] relative isolate"
        >
          {isPending && (
            <div className="absolute inset-0 flex items-center justify-center">
              <CircleDashed className="animate-spin h-5 w-5" />
            </div>
          )}
          {isPending ? "Updating..." : "Update Car"}
        </Button>
      </div>

      {state?.status === 200 && (
        <p className="text-green-500 text-center mt-4">{state.message}</p>
      )}

      {state?.status === 400 && (
        <p className="text-red-500 text-center mt-4">{state.message}</p>
      )}

      {state?.status === 500 && (
        <p className="text-red-500 text-center mt-4">{state.message}</p>
      )}
    </form>
  );
};
export default UpdateCarForm;
