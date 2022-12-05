import { Link } from "../../styles/Button";
import { HeaderStyled } from "../../styles/Header";
import { PrimaryButton } from "../Button/Button";

export const Header = () => {
  return (
    <HeaderStyled>
      <div>
        <p>Weronika Kurek-Pękala</p>
      </div>
      <Link to={`/registration`}>
        <PrimaryButton>formularz rejestracyjny</PrimaryButton>
      </Link>
    </HeaderStyled>
  );
};
