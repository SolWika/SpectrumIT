import { useState } from "react";
import { Formik, Field } from "formik";

import { Button } from "../Button/Button";

export const FormCard = () => {
  return (
    <>
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
        {/* <label>
          <Field type="checkbox" name="toggle" />
        </label> */}

        <Button color="rgba(7, 21, 148, 1)" name="zapisz" />
      </Formik>
    </>
  );
};
