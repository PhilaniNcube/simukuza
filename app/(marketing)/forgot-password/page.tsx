"use client";

import { useActionState } from "react";
import Link from "next/link";
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
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { forgotPassword } from "@/actions/forgotPasswordAction";


export default function ForgotPasswordPage() {

  const [state, formAction, isPending] = useActionState(
    forgotPassword,
    null
  );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Forgot Password</CardTitle>
          <CardDescription>
            Enter your email to reset your password
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="your@email.com"
                autoComplete="email"
                required
              />
              {state?.errors?.email && (
                <p className="text-sm text-red-600">{state.errors.email[0]}</p>
              )}
            </div>
            {state?.message && (
              <div
                className={`flex items-center space-x-2 ${
                  state.message.includes("error")
                    ? "text-red-600"
                    : "text-green-600"
                }`}
              >
                {state.message.includes("error") ? (
                  <AlertCircle size={16} />
                ) : (
                  <CheckCircle2 size={16} />
                )}
                <span className="text-sm">{state.message}</span>
              </div>
            )}
            <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Sending..." : "Send Reset Link"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="justify-center">
          <p className="text-sm text-gray-600">
            Remember your password?{" "}
            <Link href="/login" className="text-lightblue hover:underline">
              Log in
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
