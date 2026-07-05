import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About SS Construction | Trusted Civil Contractors in Erode",
  description: "Learn about SS Construction, Erode's top civil contractors with 4+ years of experience delivering premium residential and commercial structures under Sankar's leadership.",
  openGraph: {
    title: "About SS Construction | Trusted Civil Contractors in Erode",
    description: "Learn about Erode's top civil contractors delivering premium residential and commercial structures.",
    url: "https://www.ssconstructionerode.in/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
