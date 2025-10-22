import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
  <Hero />
  {/* <About /> */}
  {/* <Skills /> */}
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Index;
