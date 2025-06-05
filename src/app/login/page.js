import LoginContents from "@/components/LoginSignupComps/LoginContents";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import LoginNav from "@/components/LoginNav";

export default function Security() {
  return (
    <PageWrapper>
      {/* <Nav /> */}
      <LoginNav />
      <LoginContents />
      <Footer />
    </PageWrapper>
  );
}
