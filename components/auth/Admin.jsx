import { useFormik } from "formik";
import { adminSchema } from "../../schema/adminSchema";
import Input from "../form/Input";
import PrimayBtn from "../ui/PrimayBtn";
import Title from "../ui/Title";
import Link from "next/link";

const Admin = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        actions.resetForm();
      };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit,
    validationSchema: adminSchema,
  });

  const loginInput = [
    {
      id: 1,
      name: "username",
      type: "text",
      span: "Enter your username",
      value: formik.values.username,
      errorMessage: formik.errors.username,
      touched:formik.touched.username
    },
    {
      id: 2,
      name: "password",
      type: "password",
      span: "Enter your password",
      value: formik.values.password,
      errorMessage: formik.errors.password,
      touched:formik.touched.password
    },
  ];

  return (
    <div className="w-1/2 mx-auto flex flex-col gap-4 my-4">
      <Title titleClass="text-[2.5rem]">Admin Login</Title>
      <form action="#" className="w-full flex flex-col gap-4" onSubmit={formik.handleSubmit}>
        {loginInput.map((eachInput) => {
          return <Input key={eachInput.id} {...eachInput} onChange={formik.handleChange}
          onBlur={formik.handleBlur} />;
        })}
        <PrimayBtn type='submit' addClass="uppercase">Login</PrimayBtn>
        <Link className="underline text-sm" href="/">
         Go Home Page
        </Link>
      </form>
    </div>
  );
};

export default Admin;
