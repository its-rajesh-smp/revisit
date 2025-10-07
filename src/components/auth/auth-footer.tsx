import Link from "next/link";

function AuthFooter() {
  return (
    <footer className="mt-6 sm:mt-8 text-center">
      <div className="space-y-3">
        <div className="text-xs sm:text-sm text-muted-foreground">
          By signing in to Duolingo, you agree to our{" "}
          <Link href="#" className="text-primary hover:underline font-semibold">
            Terms
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-primary hover:underline font-semibold">
            Privacy Policy
          </Link>
          .
        </div>
        <div className="text-xs sm:text-sm text-muted-foreground">
          This site is protected by reCAPTCHA Enterprise and the Google{" "}
          <Link href="#" className="text-primary hover:underline font-semibold">
            Privacy Policy
          </Link>{" "}
          and{" "}
          <Link href="#" className="text-primary hover:underline font-semibold">
            Terms of Service
          </Link>{" "}
          apply.
        </div>
      </div>
    </footer>
  );
}

export { AuthFooter };
