import About from "@/components/sections/about/About";
import Clubs from "@/components/sections/clubs/Clubs";
import Contact from "@/components/sections/contact/Contact";
import Documents from "@/components/sections/documents/Documents";
import Hero from "@/components/sections/home/hero";
import Gallery from "@/components/sections/gallery/Gallery";
import Events from "@/components/sections/events/Events";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Clubs />
        <Gallery />
        <Events />
        <Documents />
        <Contact />
        <Footer />
      </main>
    </>
  );
}