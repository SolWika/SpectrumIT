import { useFormik } from "formik";
import { PrimaryButton } from "../Button/Button";
import {
  ErrorMessage,
  FormContainer,
  InputContainer,
  StyledInput,
} from "./Form.style";

interface Values {
  login: string;
  password: string;
  phoneNumber: string;
  email: string;
}

const validate = (values: Values) => {
  const errors = {} as Values;
  if (!values.login) {
    errors.login = "Required";
  } else if (values.login.length < 5) {
    errors.login = "Musi być minimum 5 znaków";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 5) {
    errors.password = "Musi być minimum 5 znaków";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Nieprawidłowy format adresu email";
  }

  if (!values.phoneNumber) {
    errors.phoneNumber = "Required";
  } else if (values.phoneNumber.length !== 9) {
    errors.phoneNumber = "Nieprawidłowy numer telefonu";
  }

  return errors;
};

export const RegistrationForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      login: "",
      password: "",
      phoneNumber: "",
      email: "",
    },
    validate,
    onSubmit: (values) => {
      fetch(`https://example/`, {
        method: "PUT",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(values),
      });
    },
  });
  return (
    <FormContainer onSubmit={formik.handleSubmit}>
      <InputContainer>
        <label htmlFor="login">Login:</label>
        <StyledInput
          id="login"
          name="login"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.login}
        />
        {formik.errors.login ? (
          <ErrorMessage>{formik.errors.login}</ErrorMessage>
        ) : null}
      </InputContainer>

      <InputContainer>
        <label htmlFor="password">Hasło:</label>
        <StyledInput
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.login ? (
          <ErrorMessage>{formik.errors.login}</ErrorMessage>
        ) : null}
      </InputContainer>

      <InputContainer>
        <label htmlFor="email">E-mail:</label>
        <StyledInput
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.errors.email ? (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        ) : null}
      </InputContainer>

      <InputContainer>
        <label htmlFor="login">Numer telefonu:</label>
        <StyledInput
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.phoneNumber}
        />
        {formik.errors.login ? (
          <ErrorMessage>{formik.errors.phoneNumber}</ErrorMessage>
        ) : null}
      </InputContainer>

      <PrimaryButton type="submit" color="rgba(7, 21, 148, 1)">
        zapisz
      </PrimaryButton>
    </FormContainer>
  );
};
