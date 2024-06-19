import HomeAboutSection from "@/components/home/HomeAboutSection";
import HomeHeader from "@/components/home/HomeHeader";
import ContactSection from "@/components/layout/ContactSection";
import { BarLoader } from "react-spinners";

export default function Home() {
    return (
        <>
           
            <HomeHeader />
            <HomeAboutSection />
            <ContactSection />
        </>
    );
}
