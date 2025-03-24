import css from "./BookingForm.module.scss";
import toast, { Toaster } from "react-hot-toast";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Btn from "../Btn/Btn";

const BookingForm = () => {
  const FeedbackSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email().required("Required"),
    bookingDate: Yup.date()
      .required("Required")
      .default(function () {
        return new Date();
      }),
    comment: Yup.string(),
  });

  const initialValues = {
    name: "",
    email: "",
    bookingDate: new Date().toISOString().split("T")[0],
    comment: "",
  };

  const handleSubmit = (values, actions) => {
    console.log("Booking:", values);
    toast.success("Booking submitted successfully!");
    actions.resetForm();
  };
  return (
    <div className={css.formContainer}>
      <Toaster position="bottom-right" reverseOrder={false} />
      <p className={css.bookingTitle}>Book your campervan now</p>
      <p className={css.bookingDescription}>
        Stay connected! We are always ready to help you.
      </p>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}
      >
        <Form className={css.bookingForm}>
          <div className={css.formItem}>
            <Field
              className={css.formField}
              type="text"
              name="name"
              placeholder="Name*"
            />
            <ErrorMessage name="name" component="span" />
          </div>
          <div className={css.formItem}>
            <Field
              className={css.formField}
              type="text"
              name="email"
              placeholder="Email*"
            />
            <ErrorMessage name="email" component="span" />
          </div>
          <div className={css.formItem}>
            <Field
              className={css.formField}
              type="date"
              id="bookingDate"
              name="bookingDate"
              placeholder="Booking date*"
            />
            <ErrorMessage name="bookingDate" component="span" />
          </div>
          <div className={css.formItem}>
            <Field
              className={css.textArea}
              as="textarea"
              name="comment"
              placeholder="Comment"
            />
            <ErrorMessage name="comment" component="span" />
          </div>
          <div className={css.btn}>
            <Btn type="submit" tag="Send" />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default BookingForm;
