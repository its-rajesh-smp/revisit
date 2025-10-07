"use client";

import { AuthInput, AuthLayout } from "@/components/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ForgotPassword() {
  return (
    <AuthLayout
      title="Forgot password"
      subtitle="We will send you instructions on how to reset your password by email."
    >
      <form className="space-y-5">
        {/* Email Input */}
        <AuthInput type="email" placeholder="Email" name="email" />

        {/* Submit Button */}
        <Button className="w-full" variant="duolingo" size="duolingo">
          LOG IN
        </Button>

        {/* Back to Login Link */}
        <div className="text-center pt-3">
          <Link
            href="/login"
            className="text-sm sm:text-base text-primary hover:underline font-semibold transition-colors"
          >
            Back to login
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}
