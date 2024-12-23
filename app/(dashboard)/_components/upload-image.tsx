/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, CircleDashed } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { uploadImage } from "@/actions/upload-image";
import { startTransition, useActionState, useOptimistic } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ImageUpload({
  car_id,
  images,
}: {
  car_id: number;
  images: string[];
}) {
  const [state, formAction, isPending] = useActionState(uploadImage, null);
  const router = useRouter();

  const [optimisticImages, setOptimisticImages] =
    useOptimistic<string[]>(images);

  return (
    <div className="max-w-md mx-auto w-full mt-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Upload Image to Supabase</h2>
      <form
        action={(formData) => {
          startTransition(() => {
            formAction(formData);
          });

          // Optimistically add the image to the list
          setOptimisticImages((prev) => [...prev, formData.get("file") as string]);
          router.refresh();
        }}
        className="mb-4"
      >
        <Input type="hidden" name="car_id" value={car_id} />
        <Label htmlFor="file">Select Image</Label>
        <Input
          id="file"
          name="file"
          type="file"
          accept="image/*"
          className="mt-1"
        />
        <Button
          type="submit"
          disabled={isPending}
          className="w-full relative mt-4"
        >
          {isPending && (
            <div className="absolute inset-0 flex items-center justify-center">
              <CircleDashed className="animate-spin" />
            </div>
          )}
          Upload Image
        </Button>
      </form>

      {state?.error && (
        <Alert variant="destructive" className="mt-4">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{state.message}</AlertDescription>
        </Alert>
      )}
      {images.length > 0 && (
        <div
          className={cn(
            "mt-4 grid grid-cols-2 gap-2",
            isPending && "opacity-50 animate-pulse"
          )}
        >
          {optimisticImages.map((image) => {
            return (
              <div key={image} className="relative">
                <Image
                  width={500}
                  height={500}
                  src={`https://agdxtilhlswciswxjeqt.supabase.co/storage/v1/object/public/car_images/${image}`}
                  alt="Vehicle Image"
                  className="w-full object-cover aspect-square"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
