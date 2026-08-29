import React from "react";
import Breadcrumb from "@/components/Breadcrumb";
import ForgotPassword from "@/components/Auth/ForgotPassword";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password | AI Tool - Next.js Template for AI Tools",
  description: "This is Forgot Password page for AI Tool",
  // other metadata
};

const ForgotPasswordPage = () => {
  return (
    <>
      <Breadcrumb pageTitle="Forgot Password" />
      <ForgotPassword />
    </>
  );
};

export default ForgotPasswordPage;
