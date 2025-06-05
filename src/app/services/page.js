import NewServicesPageContents from "@/components/NewHomeContents/NewServicesPageContents";
import NewMobileNav from "@/components/NewMobileNav";
import NewNav from "@/components/NewNav";
import NewPageWrapper from "@/components/NewPageWrapper";
import React from "react";

const page = () => {
  return (
    <NewPageWrapper>
      <NewNav />
      <NewMobileNav />
      <NewServicesPageContents />
    </NewPageWrapper>
  );
};

export default page;
