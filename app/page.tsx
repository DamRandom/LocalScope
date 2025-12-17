// app/page.tsx
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhatYouGet from "./components/WhatYouGet";
import WhoItsFor from "./components/WhoItsFor";
import FinalCTA from "./components/FinalCTA";

export default function Home() {
  return (
    <main className="bg-[#F8FAFC] text-[#020617] overflow-hidden">
      {/* Hero lives in a lighter, breathable space */}
      <Hero />

      {/* Content sections */}
      <div className="space-y-32">
        <HowItWorks />
        <WhatYouGet />
        <WhoItsFor />
      </div>

      {/* Final emphasis */}
      <FinalCTA />
    </main>
  );
}
