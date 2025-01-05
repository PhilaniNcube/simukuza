"use client";

import { startTransition, useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { DealershipFormData, newDealershipSchema } from "@/utils/types";
import { addDealership } from "@/actions/add-dealership";

const DealershipForm = () => {
  const {
    register,
    formState: { errors },
  } = useForm<DealershipFormData>({
    resolver: zodResolver(newDealershipSchema),
  });

  const [state, formAction, isPending] = useActionState(addDealership, null);

  return (
    <form
      action={(formData: FormData) => {
        startTransition(() => {
          formAction(formData);
        });
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full">
          <Label htmlFor="name">Name</Label>
          <Input type="text" id="name" {...register("name")} name="name" />
          {errors.name && <span>{errors.name.message}</span>}
          {state && state.fieldErrors && <span>{state.fieldErrors.name}</span>}
        </div>
        <div className="w-full">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" {...register("email")} name="email" />
          {errors.email && <span>{errors.email.message}</span>}
          {state && state.fieldErrors && <span>{state.fieldErrors.email}</span>}
        </div>
        <div className="w-full">
          <Label htmlFor="contact_number">Contact Number</Label>
          <Input
            type="contact_number"
            id="contact_number"
            {...register("contact_number")}
            name="contact_number"
          />
          {errors.contact_number && (
            <span>{errors.contact_number.message}</span>
          )}
          {state && state.fieldErrors && (
            <span>{state.fieldErrors.contact_number}</span>
          )}
        </div>
        <div className="w-full">
          <Label htmlFor="location">Location</Label>
          <Input
            type="text"
            id="location"
            {...register("location")}
            name="location"
          />
          {errors.location && <span>{errors.location.message}</span>}
          {state && state.fieldErrors && (
            <span>{state.fieldErrors.location}</span>
          )}
        </div>
      </div>
      {state && state.errors && (
        <p className="text-red-700 text-sm">{state.errors.general}</p>
      )}
      <br />
      {state && state.success && (
        <p className="text-green-700 text-sm">Dealership added successfully</p>
      )}
      <Button
        type="submit"
        disabled={isPending}
        className="mt-4 w-1/2 md:w-1/3"
      >
        {isPending ? "Saving..." : "Save"}
      </Button>
    </form>
  );
};
export default DealershipForm;
