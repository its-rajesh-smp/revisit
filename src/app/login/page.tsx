"use client";

import {
  AuthDivider,
  AuthFooter,
  AuthInput,
  AuthLayout,
  SocialButton,
} from "@/components/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function Login() {
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInput),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <AuthLayout title="Log in">
      <form className="space-y-3" onSubmit={handleSubmit}>
        {/* Email/Username Input */}
        <AuthInput
          value={userInput.email}
          onChange={(e) =>
            setUserInput({ ...userInput, email: e.target.value })
          }
          type="text"
          placeholder="Email or username"
          name="email"
        />

        {/* Password Input with Forgot Link */}
        <AuthInput
          value={userInput.password}
          onChange={(e) =>
            setUserInput({ ...userInput, password: e.target.value })
          }
          type="password"
          placeholder="Password"
          name="password"
          rightContent={
            <Link
              href="/forgot-password"
              className="text-xs sm:text-sm font-bold text-muted-foreground hover:text-primary uppercase transition-colors"
            >
              Forgot?
            </Link>
          }
        />

        {/* Login Button */}
        <Button
          type="submit"
          className="w-full"
          variant="duolingo"
          size="duolingo"
        >
          LOG IN
        </Button>

        {/* Divider */}
        <AuthDivider />

        {/* Social Login Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <SocialButton provider="google">Google</SocialButton>
          <SocialButton provider="facebook">Facebook</SocialButton>
        </div>

        {/* Already have account */}
        <div className="text-center pt-3">
          <Link
            href="/register"
            className="text-sm sm:text-base text-primary hover:underline font-semibold transition-colors"
          >
            Don't have an account? Create one
          </Link>
        </div>
      </form>

      <AuthFooter />
    </AuthLayout>
  );
}
