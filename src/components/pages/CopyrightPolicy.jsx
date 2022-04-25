import Download from "../Download";
import Footer from "../Footer";
import Header from "../Header";
import HeroCopyrightPolicy from "../HeroCopyrightPolicyPage.jsx";

export function CopyrightPolicyPage() {
  return (
    <div className="App text-white overflow-hidden">
      <Header />
      <HeroCopyrightPolicy />     
      <Download />
      <Footer />
    </div>
  );
}
