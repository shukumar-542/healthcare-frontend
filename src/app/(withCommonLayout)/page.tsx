import HeroSection from "@/components/ui/HomePgae/HeroSection/HeroSection";
import Specialist from "@/components/ui/HomePgae/Specialist/Specialist";
import TopRatedDoctors from "@/components/ui/HomePgae/TopRatedDoctors/TopRatedDoctors";
import WhyUs from "@/components/ui/HomePgae/WhyUs/WhyUs";

const AboutPage = () => {
  return (
    <div>
      <HeroSection/>
      <Specialist/>
      <TopRatedDoctors/>
      <WhyUs/>
    </div>
  );
};

export default AboutPage;