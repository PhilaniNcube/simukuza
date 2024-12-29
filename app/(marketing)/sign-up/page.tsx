"use client";

import { startTransition, useActionState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { AlertCircle, CheckCircle, CircleDashed } from "lucide-react";
import { SignUpFormValues, signUpSchema } from "@/utils/types";
import { signUpAction } from "@/actions/sign-up-action";

export default function SignupPage() {


  const [state, formAction, isPending] = useActionState(signUpAction, null);

  const {
    register,

    formState: { errors },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Sign Up</CardTitle>
          <CardDescription>Create your account to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            action={(formData: FormData) => {
              startTransition(() => {
                formAction(formData)
              });
            }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="full_name">Full Name</Label>
              <Input
                id="full_name"
                type="text"
                placeholder="John Doe"
                autoComplete="full_name"
                {...register("full_name")}
              />
              {errors.full_name && (
                <p className="text-sm text-red-600">
                  {errors.full_name.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="john@example.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" {...register("password")} />
              {errors.password && (
                <p className="text-sm text-red-600">
                  {errors.password.message}
                </p>
              )}
            </div>
            {state?.status === 400 && (
              <div className="flex items-center text-red-600 space-x-2">
                <AlertCircle size={16} />
                <span className="text-sm">{state.message}</span>
              </div>
            )}
            {state?.status === 200 && (
              <div className="flex items-center text-green-600 space-x-2">
                <CheckCircle size={16} />
                <span className="text-sm">{state.message}</span>
              </div>
            )}
            <Button disabled={isPending} type="submit" className="w-full relative">
              Sign Up
              {isPending && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <CircleDashed className="w-4 h-4 border-t-2 border-l-2 border-primary animate-spin"/>
                </div>
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-lightblue hover:underline">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
