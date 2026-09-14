"use client";

import dynamic from "next/dynamic";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { WhatsAppFab } from "@/components/whatsapp-fab";

const About = dynamic(() => import("@/components/about").then((m) => m.About), {
  ssr: false,
  loading: () => <section className="h-96 animate-pulse bg-muted" />,
});
const Pricing = dynamic(
  () => import("@/components/pricing").then((m) => m.Pricing),
  {
    ssr: false,
    loading: () => <section className="h-96 animate-pulse bg-muted" />,
  }
);
const HowItWorks = dynamic(
  () => import("@/components/how-it-works").then((m) => m.HowItWorks),
  {
    ssr: false,
    loading: () => <section className="h-96 animate-pulse bg-muted" />,
  }
);
const Gallery = dynamic(
  () => import("@/components/gallery").then((m) => m.Gallery),
  {
    ssr: false,
    loading: () => <section className="h-96 animate-pulse bg-muted" />,
  }
);
const BookingForm = dynamic(
  () => import("@/components/booking-form").then((m) => m.BookingForm),
  {
    ssr: false,
    loading: () => <section className="h-96 animate-pulse bg-muted" />,
  }
);
const Footer = dynamic(
  () => import("@/components/footer").then((m) => m.Footer),
  {
    ssr: false,
    loading: () => <footer className="h-48 animate-pulse bg-muted" />,
  }
);

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Pricing />
        <HowItWorks />
        <Gallery />
        <BookingForm />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
