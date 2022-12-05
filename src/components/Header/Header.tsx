import { Link } from "../../styles/Button";
import { HeaderStyled } from "../../styles/Header";

import { Button } from "../Button/Button";

interface HeaderProps {
  to: any;
}

export const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <p>Weronika Kurek-Pękala</p>
      </div>
      <Link to={`/registration`}>
        <Button name="formularz rejestracyjny" />
      </Link>
    </HeaderStyled>
  );
};
