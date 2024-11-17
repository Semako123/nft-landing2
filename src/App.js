import Hero from "./components/containers/Hero";
import Navbar from "./components/Navbar";
import Featured from "./components/containers/Featured";
import CTA from "./components/containers/CTA";
import Info from "./components/containers/Info";
import LargestSales from "./components/containers/LargestSales";
import RecentTransactions from "./components/containers/RecentTransactions";
import GetStarted from "./components/containers/GetStarted";
import FAQ from "./components/containers/FAQ";
import Footer from "./components/containers/Footer";

function App() {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <Featured />
      <CTA />
      <Info />
      <LargestSales />
      <RecentTransactions />
      <GetStarted />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
