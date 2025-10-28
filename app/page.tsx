import Hero from "@/components/Hero";
import WhatYouDo from "@/components/WhatYouDo";
import WhyDifferent from "@/components/WhyDifferent";
import WhatYouLearn from "@/components/WhatYouLearn";
import WhoCanJoin from "@/components/WhoCanJoin";
import InstructorBio from "@/components/InstructorBio";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhatYouDo />
      <WhyDifferent />
      <WhatYouLearn />
      <WhoCanJoin />
      <InstructorBio />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
