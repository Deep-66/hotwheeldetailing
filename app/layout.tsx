import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hot Wheels Detailing | Professional Car Detailing Services",
  description: "Transform your vehicle with our professional car detailing services. Premium paint protection, ceramic coatings, and expert car care.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
}
