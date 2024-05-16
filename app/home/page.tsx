import About from "./components/About";
import Header from "./components/Header";
import ContactSection from "../components/layout/ContactSection";

export default function Home() {
    return (
        <main className="min-h-[100dvh]">
            <Header />
            <About />
            <ContactSection />
        </main>
    );
}
