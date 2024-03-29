import { Metadata } from "next";

import { Navbar } from "@/components/main/navbar/navbar";

export const metadata: Metadata = {
  title: "Shelter Cure | Home",
  description: "Generated by create next app",
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
