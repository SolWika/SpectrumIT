import { Formik, Field, ErrorMessage } from "formik";
import { Link } from "../../styles/Button";

import { Button } from "../Button/Button";
import {
  HeaderForm,
  BlueRectangle,
  FormContainer,
  InputContainer,
  BackButton,
  LabelInput,
  FieldInput,
  ErrorInput,
} from "./Form.style";

export const FormCard = () => {
  return (
    <>
      <div>
        <HeaderForm>
          <Link to={`/`}>
            <BackButton />
          </Link>
          <h1>formularz rejestracyjny</h1>
          <BlueRectangle />
        </HeaderForm>

        <Formik
          initialValues={{
            name: "",
            email: "",
            password: "",
            phoneNumber: "",
            toggle: false,
            checked: [],
          }}
          onSubmit={async (values) => {
            let data = {
              name: values.name,
              email: values.email,
            };
            fetch(`https://example/`, {
              method: "PUT",
              headers: { "content-type": "application/json" },
              body: JSON.stringify(data),
            });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <FormContainer onSubmit={handleSubmit}>
              <InputContainer>
                <LabelInput htmlFor="login">Login:</LabelInput>
                <FieldInput id="login" type="text" name="login" />
                <ErrorInput name="login" component="div" />
              </InputContainer>
              <InputContainer>
                <LabelInput htmlFor="password">Hasło:</LabelInput>
                <FieldInput id="password" type="text" name="password" />
                <ErrorInput name="password" component="div" />
              </InputContainer>
              <InputContainer>
                <LabelInput htmlFor="email">E-mail:</LabelInput>
                <FieldInput id="email" type="text" name="email" />
                <ErrorInput name="email" component="div" />
              </InputContainer>
              <InputContainer>
                <LabelInput htmlFor="numberPhone">Numer telefonu:</LabelInput>
                <FieldInput id="numberPhone" type="number" name="numberPhone" />
                <ErrorInput name="numberPhone" component="div" />
              </InputContainer>
              <Button
                type="submit"
                disabled={isSubmitting}
                color="rgba(7, 21, 148, 1)"
                name="zapisz"
              />
            </FormContainer>
          )}
        </Formik>
      </div>
    </>
  );
};
