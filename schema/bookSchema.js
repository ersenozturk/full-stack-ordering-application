import * as Yup from "yup";

export const bookSchema = () =>
  Yup.object({
    fullName: Yup.string()
      .required("Full name is required.")
      .min(3, "Full name must be at least 3 characters."),
    phone: Yup.number()
      .required("Full name is required.")
      .min(10, "Phone number must be at least 10 characters."),
    email: Yup.string()
      .required("Email is required.")
      .email("Email is invalid."),
    manyPerson: Yup.number().max(100).required().min(1,'Booking must be at least 1 people'),
    date: Yup.date().default(() => new Date()),
  });
