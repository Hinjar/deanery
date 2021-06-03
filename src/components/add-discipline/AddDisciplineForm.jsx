import { Form, Formik } from "formik";
import { Button, TextField } from "@material-ui/core";
import "./style.css";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Введите название дисциплины"),
  index: Yup.string().required("Введите индекс дисциплины"),
  watch: Yup.number().required("Введите количество часов"),
});

export const AddDisciplineForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          index: "",
          watch: "",
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
                label="Название"
                value={values.name}
                onChange={handleChange}
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
              <TextField
                fullWidth
                name="index"
                label="Индекс дисциплины"
                value={values.index}
                onChange={handleChange}
                error={touched.index && Boolean(errors.index)}
                helperText={touched.index && errors.index}
              />
              <TextField
                fullWidth
                name="watch"
                label="Количество часов"
                value={values.watch}
                onChange={handleChange}
                error={touched.watch && Boolean(errors.watch)}
                helperText={touched.watch && errors.watch}
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
