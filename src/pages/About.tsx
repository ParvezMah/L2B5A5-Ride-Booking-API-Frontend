import { CompanyBackground } from "@/components/About/CompanyBackground";
import { Mission } from "@/components/About/Mission";
import { TeamProfiles } from "@/components/About/TeamProfiles";

export default function About() {
  return (
      <div className="py-16 px-4 container mx-auto">
        <CompanyBackground/>
        <Mission/>
        <TeamProfiles/>
      </div>
  );
}
