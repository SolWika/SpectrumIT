import { HeaderStyled } from "../../styles/Header";

import { Button } from "../Button/Button";

interface HeaderProps {
  onClick?: any;
}

export const Header = ({ onClick }: HeaderProps) => {
  return (
    <HeaderStyled>
      <div>
        <p>Weronika Kurek-Pękala</p>
      </div>
      <Button onClick={onClick} name="formularz rejestracyjny" />
    </HeaderStyled>
  );
};
