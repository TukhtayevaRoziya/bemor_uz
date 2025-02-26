import SignUp from "@/components/Auth/SignUp";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Ro'yxatdan o'tish | Property",
};

const SignupPage = () => {
  return (
    <>
      <Breadcrumb pageName="Ro'yxatdan o'tish Page" />

      <SignUp />
    </>
  );
};

export default SignupPage;
