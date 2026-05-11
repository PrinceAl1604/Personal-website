import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Works } from "@/components/sections/works";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Testimonials } from "@/components/sections/testimonials";
import { Awards } from "@/components/sections/awards";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Works />
      <Process />
      <Services />
      <Testimonials />
      <Awards />
    </>
  );
}
