import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact SS Construction | Best Civil Engineers in Erode",
  description: "Get in touch with Erode's leading civil engineering and construction company. We are ready to discuss your residential, commercial, or structural project.",
  openGraph: {
    title: "Contact SS Construction | Best Civil Engineers in Erode",
    description: "Get in touch with Erode's leading civil engineering and construction company.",
    url: "https://www.ssconstructionerode.in/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
