import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/home/hero";
import Documents from "@/components/sections/documents/Documents";
import Contact from "@/components/sections/contact/Contact";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="bg-black">
        <Hero />
        <Documents />
        <Contact />
      </main>
    </>
  );
}