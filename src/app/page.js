import Image from "next/image";
import styles from "./page.module.css";
import HomeContents from "@/components/HomeComps/HomeContents";
import Banner from "@/components/HomeComps/Banner";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import PageWrapper from "@/components/PageWrapper";
import NewPageWrapper from "@/components/NewPageWrapper";
import NewNav from "@/components/NewNav";
import NewHomePageContents from "@/components/NewHomeContents/NewHomePageContents";
import NewMobileNav from "@/components/NewMobileNav";
import NewFooter from "@/components/NewFooter";

export default function Home() {
  return (
    <NewPageWrapper>
      <NewNav />
      <NewMobileNav />
      <NewHomePageContents />
      <NewFooter />
      {/* <Nav /> */}
      {/* <Banner /> */}
      {/* <HomeContents /> */}
      {/* <Footer /> */}
    </NewPageWrapper>
  );
}
