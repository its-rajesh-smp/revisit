import { AppNav } from "./components";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="px-4 md:px-6">
      <AppNav />
      {children}
    </main>
  );
}
