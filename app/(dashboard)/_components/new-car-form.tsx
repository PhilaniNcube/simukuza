"use client";

import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { NewCarFormValues, newCarSchema } from "@/utils/types";
import { addCar } from "@/actions/new-car-action";
import { CircleDashed } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { redirect } from "next/navigation";

export default function NewCarForm({
  makes,
}: {
  makes: { id: number; name: string }[];
}) {
  const [state, formAction, isPending] = useActionState(addCar, null);
  const {
    register,
    control,
    formState: { errors },
  } = useForm<NewCarFormValues>({
    resolver: zodResolver(newCarSchema),
  });

  if (state?.status === 200) {
    redirect(`/dashboard/cars/${state.data?.id}`);
  }

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
          <Label htmlFor="make" className="block mb-2">
            Make
          </Label>
          <Controller
            name="make"
            control={control}
            render={({ field }) => (
              <Select
                name="make"
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
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
            )}
          />
          {errors.make && (
            <p className="text-red-500 text-sm mt-1">{errors.make.message}</p>
          )}
          {state?.errors?.make && (
            <p className="text-red-500 text-sm mt-1">{state?.errors?.make}</p>
          )}
        </div>

        <div>
          <Label htmlFor="model" className="block mb-2">
            Model
          </Label>
          <Input id="model" {...register("model")} className="w-full" />
          {errors.model && (
            <p className="text-red-500 text-sm mt-1">{errors.model.message}</p>
          )}
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
            {...register("capacity", { valueAsNumber: true })}
            className="w-full"
          />
          {errors.capacity && (
            <p className="text-red-500 text-sm mt-1">
              {errors.capacity.message}
            </p>
          )}
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
          <Controller
            name="condition"
            control={control}
            render={({ field }) => (
              <Select
                name="condition"
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a car condition" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="used">Used</SelectItem>
                  <SelectItem value="recent_import">Recent Import</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.condition && (
            <p className="text-red-500 text-sm mt-1">
              {errors.condition.message}
            </p>
          )}
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
          <Controller
            name="transmission"
            control={control}
            render={({ field }) => (
              <Select
                name="transmission"
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select transmission" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="automatic">Automatic</SelectItem>
                  <SelectItem value="manual">Manual</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.transmission && (
            <p className="text-red-500 text-sm mt-1">
              {errors.transmission.message}
            </p>
          )}
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
          <Controller
            name="engine_type"
            control={control}
            render={({ field }) => (
              <Select
                name="engine_type"
                onValueChange={field.onChange}
                defaultValue={field.value}
              >
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
            )}
          />
          {errors.engine_type && (
            <p className="text-red-500 text-sm mt-1">
              {errors.engine_type.message}
            </p>
          )}
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
            {...register("year", { valueAsNumber: true })}
            className="w-full"
          />
          {errors.year && (
            <p className="text-red-500 text-sm mt-1">{errors.year.message}</p>
          )}
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
            {...register("mileage", { valueAsNumber: true })}
            className="w-full"
          />
          {errors.mileage && (
            <p className="text-red-500 text-sm mt-1">
              {errors.mileage.message}
            </p>
          )}
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
            {...register("price", { valueAsNumber: true })}
            className="w-full"
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
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
          {...register("description")}
          className="w-full h-32"
        />
        {errors.description && (
          <p className="text-red-500 text-sm mt-1">
            {errors.description.message || state?.errors?.description}
          </p>
        )}
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
          {isPending ? "Adding Car..." : "Add Car"}
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
}
