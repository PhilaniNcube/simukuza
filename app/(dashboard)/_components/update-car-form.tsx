"use client";
import { Database } from "@/utils/schema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { startTransition, useActionState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {  UpdateCarFormValues, updateCarSchema } from "@/utils/types";
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

  const [state, formAction, isPending] = useActionState(updateCar, null);
  const {
    register,
    control,
    formState: { errors },
  } = useForm<UpdateCarFormValues>({
    resolver: zodResolver(updateCarSchema),
    defaultValues: {
      make: car.make,
      model: car.model,
      year: car.year,
      mileage: car.mileage || 0,
      price: car.price,
      description: car.description || "",
      id: car.id,
    }
  });




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
          <Input type="hidden" {...register("id")} value={car.id} />
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
