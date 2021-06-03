import { Form, Formik } from "formik";
import { Button, TextField } from "@material-ui/core";
import "./style.css";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Введите название специальности"),
  code: Yup.string().required("Введите код специальности"),
});

export const AddSpecializationForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          code: "",
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched, isValid, dirty, handleChange, values }) => {
          return (
            <Form>
              <TextField
                fullWidth
                name="name"
                label="Название специальности"
                value={values.name}
                onChange={handleChange}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
              <TextField
                fullWidth
                name="code"
                label="Код специальности"
                value={values.index}
                onChange={handleChange}
                error={touched.code && Boolean(errors.code)}
                helperText={touched.code && errors.code}
              />
              <Button
                className="add-teacher-btn"
                color="primary"
                variant="contained"
                fullWidth
                type="submit"
              >
                Добавить
              </Button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
