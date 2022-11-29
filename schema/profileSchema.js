import * as Yup from "yup";

export const profileSchema = Yup.object({
  fullName: Yup.string()
    .required("Full name is required.")
    .min(3, "Full name must be at least 3 characters."),
  phone: Yup.string()
    .required("Phone Number is required.")
    .min(10, "Phone number must be at least 10 characters."),
  email: Yup.string().required("Email is required.").email("Email is invalid."),
  address: Yup.string().required("Address is required."),
  job: Yup.string().required("Job is required."),
  bio: Yup.string().required("Bio is required."),
});


export const passwordSchema = () =>
  Yup.object({
    password: Yup.string()
      .required("Password is required.")
      .min(8, "Password must be at least 8 characters.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain at least one uppercase, one lowercase, one number and one special character."
      ),
    confirmPassword: Yup.string()
      .required("Confirm password is required.")
      .oneOf([Yup.ref("password"), null], "Passwords must match."),
  });
