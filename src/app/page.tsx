import Featured from "@/components/Featured";
import HeroSection from "@/components/HeroSection";
import MovingCards from "@/components/MovingCards";
import WhyChooseUs from "@/components/WhyChooseUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Featured />
      <WhyChooseUs />
      <MovingCards />
      <Footer />
    </>
  );
}
