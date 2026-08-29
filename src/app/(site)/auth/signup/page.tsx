import Signup from "@/components/Auth/Signup";
import Breadcrumb from "@/components/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sing up | AI Tool - Next.js Template for AI Tools",
  description: "This is Sign up for AI Tool",
  // other metadata
};

const SignupPage = () => {
  return (
    <>
      <Breadcrumb pageTitle="Sign up" />

      <Signup />
    </>
  );
};

export default SignupPage;
