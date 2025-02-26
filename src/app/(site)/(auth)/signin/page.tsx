import Signin from "@/components/Auth/SignIn";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "kirish | Property",
};

const SigninPage = () => {
  return (
    <>
      <Breadcrumb pageName="kirish Page" />

      <Signin />
    </>
  );
};

export default SigninPage;
