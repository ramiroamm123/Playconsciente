import Nav from "@/components/Nav";
import ProgressRail from "@/components/ProgressRail";
import Hero from "@/components/Hero";
import WhatIsSection from "@/components/WhatIsSection";
import Objectives from "@/components/Objectives";
import Team from "@/components/Team";
import Surveys from "@/components/Surveys";
import Solution from "@/components/Solution";
import TheorySupport from "@/components/TheorySupport";
import LegalFramework from "@/components/LegalFramework";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <ProgressRail />
      <Hero />
      <WhatIsSection />
      <Objectives />
      <Team />
      <Surveys />
      <Solution />
      <TheorySupport />
      <LegalFramework />
      <Footer />
    </main>
  );
}
