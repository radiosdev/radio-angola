import Download from "../Download";
import Footer from "../Footer";
import Header from "../Header";
import HeroAboutUs from "../HeroAboutUsPage";

export function AboutUsPage() {
  return (
    <div className="App text-white overflow-hidden">
      <Header />
      <HeroAboutUs />     
      <Download />
      <Footer />
    </div>
  );
}
