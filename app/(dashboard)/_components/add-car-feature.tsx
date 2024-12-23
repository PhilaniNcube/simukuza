"use client";

import { addFeature } from "@/actions/add-feature";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Database } from "@/utils/schema";
import { CircleDashed, X } from "lucide-react";
import { startTransition, useActionState, useOptimistic } from "react";

type AddCarFeatureProps = {
  car_id: number;
  features: Database["public"]["Tables"]["car_features"]["Row"][];
};

const AddCarFeature = ({ car_id, features }: AddCarFeatureProps) => {

  const [state, formAction, isPending] = useActionState(addFeature, null);

  const [optimisticFeatures, setOptimisticFeatures] = useOptimistic(features);

  return (
    <div className="w-full mt-8 p-6 bg-white rounded-lg shadow-md">
      <form action={(formData) => {
        startTransition(() => {
          formAction(formData)
        });
        setOptimisticFeatures((prev) => {
          const feature = {
            car_id,
            id: Math.random(),
            feature: formData.get("feature") as string,
          };
          return [...prev, feature];
        });
      }}>
        <Input type="hidden" name="car_id" value={car_id} />
        <Label htmlFor="feature">Add Feature</Label>
        <Input id="feature" name="feature" type="text" className="mt-1" />
        <Button
          type="submit"
          className="w-full mt-4 relative"
          disabled={isPending}
        >
          {isPending && (
            <div className="absolute inset-0 flex justify-center items-center">
              <CircleDashed size={16} className="animate-spin" />
            </div>
          )}
          Add Feature
        </Button>
      </form>
      {state?.status === 400 && (
        <p className="text-red-500 mt-2">{state.message}</p>
      )}
      {state?.status === 200 && (
        <p className="text-green-500 mt-2">{state.message}</p>
      )}
      {state?.status === 500 && (
        <p className="text-red-500 mt-2">{state.message}</p>
      )}
      <div className="flex flex-wrap gap-3 mt-3">
        {optimisticFeatures.map((feature) => (
          <Badge
            key={feature.id}
            className="cursor-pointer flex gap-2"
            onClick={() => {
              console.log("Feature clicked");
            }}
          >
            <span>
              <X size={16} className="" />
            </span>
            <Separator orientation="vertical"  />
            {feature.feature}
          </Badge>
        ))}
      </div>
    </div>
  );
};
export default AddCarFeature;
