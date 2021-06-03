import { Form, Formik } from "formik";
import { Button, TextField } from "@material-ui/core";
import "./style.css";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Введите название группы"),
  index: Yup.string().required("Введите индекс специальности"),
  course: Yup.number().required("Введите курс"),
  quantity: Yup.number().required("Введите количество учащихся"),
});

export const AddGroupForm = () => {
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          index: "",
          course: 0,
          quantity: 1,
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
                label="Индекс группы"
                value={values.index}
                onChange={handleChange}
                error={touched.index && Boolean(errors.index)}
                helperText={touched.index && errors.index}
              />
              <TextField
                fullWidth
                name="course"
                label="Курс"
                value={values.course}
                onChange={handleChange}
                error={touched.course && Boolean(errors.course)}
                helperText={touched.course && errors.course}
              />
              <TextField
                fullWidth
                name="quantity"
                label="Количество учеников"
                value={values.quantity}
                onChange={handleChange}
                error={touched.quantity && Boolean(errors.quantity)}
                helperText={touched.quantity && errors.quantity}
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
