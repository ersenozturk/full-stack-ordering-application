import { useFormik } from "formik";
import { registerSchema } from "../../schema/registerSchema";
import Input from "../form/Input";
import PrimayBtn from "../ui/PrimayBtn";
import Title from "../ui/Title";
import Link from "next/link";

const Register = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        actions.resetForm();
        console.log('first')
      };

  const formik = useFormik({
    initialValues: {
      fullName:'',
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit,
    validationSchema: registerSchema,
  });

  const loginInput = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      span: "Enter your full name",
      value: formik.values.fullName,
      errorMessage: formik.errors.fullName,
      touched:formik.touched.fullName
    },
    {
      id: 2,
      name: "email",
      type: "email",
      span: "Enter your email",
      value: formik.values.email,
      errorMessage: formik.errors.email,
      touched:formik.touched.email
    },
    {
      id: 3,
      name: "password",
      type: "password",
      span: "Enter your password",
      value: formik.values.password,
      errorMessage: formik.errors.password,
      touched:formik.touched.password
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      span: "Confirm your password",
      value: formik.values.confirmPassword,
      errorMessage: formik.errors.confirmPassword,
      touched:formik.touched.confirmPassword
    },
  ];

  return (
    <div className="w-1/2 mx-auto flex flex-col gap-4 my-4">
      <Title titleClass="text-[2.5rem]">Register</Title>
      <form action="#" className="w-full flex flex-col gap-4" onSubmit={formik.handleSubmit}>
        {loginInput.map((eachInput) => {
          return <Input key={eachInput.id} {...eachInput} onChange={formik.handleChange}
          onBlur={formik.handleBlur} />;
        })}
        <PrimayBtn type='submit' addClass="uppercase">Register</PrimayBtn>
       
        <Link className="underline text-sm" href="/login">
          Do you have already an account?
        </Link>
      </form>
    </div>
  );
};

export default Register;
