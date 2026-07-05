import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | Premium Construction Portfolio in Erode",
  description: "View the portfolio of SS Construction. Discover our completed residential villas, commercial complexes, and structural engineering projects across Erode.",
  openGraph: {
    title: "Our Projects | Premium Construction Portfolio in Erode",
    description: "View the portfolio of SS Construction. Discover our completed residential and commercial projects across Erode.",
    url: "https://www.ssconstructionerode.in/projects",
  },
};

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
