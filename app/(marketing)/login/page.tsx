"use client";

import { startTransition, useActionState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { redirect } from "next/navigation";
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
import { AlertCircle, CheckCircle2, CircleDashed } from "lucide-react";
import { loginAction } from "@/actions/loginAction";
import { LoginFormValues, loginSchema } from "@/utils/types";

export default function LoginPage() {


  const [state, formAction, isPending] = useActionState(loginAction, null);

  const {
    register,

    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  if (state?.status === 200) {
    redirect("/dashboard");
  }



  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Log In</CardTitle>
          <CardDescription>
            Enter your credentials to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form
            action={(formData: FormData) => {
              startTransition(() => {
                formAction(formData);
              });
            }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                autoComplete="email"
                {...register("email")}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p className="text-sm text-red-600" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                {...register("password")}
                autoComplete="current-password"
                aria-invalid={errors.password ? "true" : "false"}
              />
              {errors.password && (
                <p className="text-sm text-red-600" role="alert">
                  {errors.password.message}
                </p>
              )}
            </div>
            {state?.message && (
              <div
                className={`flex items-center space-x-2 ${
                  state?.message?.includes("Invalid")
                    ? "text-red-600"
                    : "text-green-600"
                }`}
                role="alert"
              >
                {state.message?.includes("Invalid") ? (
                  <AlertCircle size={16} />
                ) : (
                  <CheckCircle2 size={16} />
                )}
                <span className="text-sm">{state.message}</span>
              </div>
            )}
            <Button
              type="submit"
              className="w-full relative"
              disabled={isPending}
            >
              {isPending && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <CircleDashed className="w-4 h-4 border-t-2 border-b-2 border-blue-600 rounded-full animate-spin" />
                </div>
              )}
              Log In
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <Link
            href="/forgot-password"
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot your password?
          </Link>
          <p className="text-sm text-gray-600">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
