"use client";

import {
  AuthDivider,
  AuthFooter,
  AuthInput,
  AuthLayout,
  SocialButton,
} from "@/components/auth";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInput),
    });

    const data = await res.json();
    console.log(data);
  };

  return (
    <AuthLayout title="Create your profile">
      <form className="space-y-3" onSubmit={handleSubmit}>
        {/* Name Input */}
        <AuthInput
          value={userInput.name}
          onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
          type="text"
          placeholder="Name (optional)"
          name="name"
        />

        {/* Email Input */}
        <AuthInput
          value={userInput.email}
          onChange={(e) =>
            setUserInput({ ...userInput, email: e.target.value })
          }
          type="email"
          placeholder="Email"
          name="email"
        />

        {/* Password Input with Toggle */}
        <AuthInput
          value={userInput.password}
          onChange={(e) =>
            setUserInput({ ...userInput, password: e.target.value })
          }
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          name="password"
          rightContent={
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="text-primary hover:text-primary/80 transition-colors"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? (
                <EyeOff className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </button>
          }
        />

        {/* Create Account Button */}
        <Button
          type="submit"
          className="w-full"
          variant="duolingo"
          size="duolingo"
        >
          Create Account
        </Button>

        {/* Divider */}
        <AuthDivider />

        {/* Social Signup Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <SocialButton provider="google">Google</SocialButton>
          <SocialButton provider="facebook">Facebook</SocialButton>
        </div>

        {/* Already have account */}
        <div className="text-center pt-3">
          <Link
            href="/login"
            className="text-sm sm:text-base text-primary hover:underline font-semibold transition-colors"
          >
            Already have an account? Log in
          </Link>
        </div>
      </form>
      <AuthFooter />
    </AuthLayout>
  );
}
