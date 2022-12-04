import { MainStyled } from "../../styles/Main";

export const Main = ({ className, children }: any) => {
  return <MainStyled className={className}>{children}</MainStyled>;
};
