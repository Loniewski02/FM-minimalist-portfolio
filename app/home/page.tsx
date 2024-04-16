import About from "./components/About";
import Header from "./components/Header";
import ContactSection from "../components/layout/ContactSection";

export default function Home() {
    return (
        <main>
            <Header />
            <About />
            <ContactSection />
        </main>
    );
}
