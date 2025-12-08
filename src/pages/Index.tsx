import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Offres from "@/components/Offres";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Offres />
      <Footer />
    </div>
  );
};

export default Index;