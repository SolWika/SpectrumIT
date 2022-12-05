import { ReactNode } from "react";
import { MainStyled } from "../../styles/Main";

type MainComponentProps = {
  children: ReactNode;
};

export const Main = ({ children }: MainComponentProps) => {
  return <MainStyled>{children}</MainStyled>;
};
