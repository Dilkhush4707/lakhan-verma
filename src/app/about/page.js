import HeroSection from "@/components/HeroSection";
import MissionSection from "@/components/MissionSection";
import PersonalPage from "@/components/personalpage";

export default function Home() {
  return (
    <main className=" bg-white max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-8 flex flex-col gap-20">
      <HeroSection />
      <PersonalPage />
      <MissionSection />
    </main>
  );
}
