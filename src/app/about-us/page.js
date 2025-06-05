import AboutContents from "@/components/AboutContents";
import SecurityContents from "@/components/PersonalComps/SecurityContents";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import NewPageWrapper from "@/components/NewPageWrapper";
import NewAboutPageContents from "@/components/NewHomeContents/NewAboutPageContents";
import NewNav from "@/components/NewNav";
import NewMobileNav from "@/components/NewMobileNav";

export default function Security() {
  return (
    <NewPageWrapper>
      <NewNav />
      <NewMobileNav />
      <NewAboutPageContents />
      {/* <Nav /> */}
      {/* <AboutContents /> */}
      {/* <Footer /> */}
    </NewPageWrapper>
  );
}
