import About from "./home/components/About";
import Header from "./home/components/Header";
import ContactSection from "./components/layout/ContactSection";

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <ContactSection />
    </main>
  );
}
