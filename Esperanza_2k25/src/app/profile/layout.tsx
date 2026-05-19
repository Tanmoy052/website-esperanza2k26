import { metaDescription } from "@/utils/static/metaData";
import { type Metadata } from "next";
import { ReactNode } from "react";

export const metadata : Metadata = {
  title: "Esperanza2k25 | Profile",
  description: metaDescription,
}

const layout = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};

export default layout;
