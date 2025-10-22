

import { CTASection } from "@/components/modules/Homepage/CTASection";
import { HeroSection } from "@/components/modules/Homepage/HeroSection";
import { HowItWorks } from "@/components/modules/Homepage/HowItWorks";
import { Services } from "@/components/modules/Homepage/Services";
import { Testimonials } from "@/components/modules/Homepage/Testimonials";


export default function Homepage() {
  return (
    <div>
      <HeroSection />
      <HowItWorks/>
     <Services/>
      <Testimonials/>
      <CTASection/>

    </div>
  );
}
