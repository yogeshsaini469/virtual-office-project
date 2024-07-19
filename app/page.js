import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Workspace from "./components/FlexibleWorkspace";
import WorkspaceSolution from "./components/WorkspaceSolution";
import VirtualAddressBenefits from "./components/VirtualAddressBenefits";
import TrustedCompanies from "./components/TrustedCompanies";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services/>
      <Workspace />
      <WorkspaceSolution />
      <VirtualAddressBenefits />
      <TrustedCompanies />
    </>

  );
}
