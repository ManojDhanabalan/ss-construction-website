import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Civil Engineering & Construction Erode",
  description: "Explore our comprehensive civil construction services in Erode: Residential Buildings, Commercial Projects, Structural Design, Plumbing, and Electrical Systems.",
  openGraph: {
    title: "Our Services | Civil Engineering & Construction Erode",
    description: "Explore our comprehensive civil construction services in Erode: Residential, Commercial, Structural Design, and more.",
    url: "https://www.ssconstructionerode.in/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
