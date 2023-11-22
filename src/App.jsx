import "./App.css";
import Navbar from "./components/Fragments/Navbar";
import BenefitLayouts from "./components/Layouts/BenefitLayouts";
import ClosingLayouts from "./components/Layouts/ClosingLayouts";
import FAQLayouts from "./components/Layouts/FAQLayouts";
import FeatureLayouts from "./components/Layouts/FeatureLayouts";
import HeroLayouts from "./components/Layouts/HeroLayouts";
import PartnerLayout from "./components/Layouts/PartnerLayouts";
import ShowcaseLayouts from "./components/Layouts/ShowcaseLayouts";

function App() {
  return (
    <>
      <Navbar />
      <HeroLayouts />
      <PartnerLayout />
      <FeatureLayouts />
      <BenefitLayouts />
      <ShowcaseLayouts />
      <FAQLayouts />
      <ClosingLayouts />
    </>
  );
}

export default App;
