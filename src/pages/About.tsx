import { CompanyBackground } from "@/components/modules/About/CompanyBackground";
import { Mission } from "@/components/modules/About/Mission";
import { TeamProfiles } from "@/components/modules/About/TeamProfiles";

export default function About() {
  return (
      <div className="py-16 px-4 container mx-auto">
        <CompanyBackground/>
        <Mission/>
        <TeamProfiles/>
      </div>
  );
}
