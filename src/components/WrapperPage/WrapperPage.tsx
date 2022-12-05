import { ReactNode } from "react";
import { WrapperPage } from "../../styles/WrapperPage";

export const WrapperPages = ({ children }: { children: ReactNode }) => {
  return <WrapperPage>{children}</WrapperPage>;
};
