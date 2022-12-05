import { Link } from "../styles/Button";
import { RegistrationForm } from "../components/Form/RegistrationForm";
import {
  HeaderForm,
  BlueRectangle,
  BackButton,
} from "../components/Form/Form.style";

export const RegistrationPage = () => {
  return (
    <div>
      <HeaderForm>
        <Link to={`/`}>
          <BackButton />
        </Link>
        <h1>formularz rejestracyjny</h1>
        <BlueRectangle />
      </HeaderForm>
      <RegistrationForm />
    </div>
  );
};
