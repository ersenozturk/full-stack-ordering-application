import { useFormik } from "formik";
import { loginSchema } from "../../schema/loginSchema";
import { AiFillGithub } from "react-icons/ai";
import Input from "../form/Input";
import PrimayBtn from "../ui/PrimayBtn";
import Title from "../ui/Title";
import Link from "next/link";

const Login = () => {
    const onSubmit = async (values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        actions.resetForm();
        console.log('first')
      };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
    validationSchema: loginSchema,
  });

  const loginInput = [
    {
      id: 1,
      name: "email",
      type: "email",
      span: "Enter your email",
      value: formik.values.email,
      errorMessage: formik.errors.email,
      touched:formik.touched.email
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
      <Title titleClass="text-[2.5rem]">Login</Title>
      <form action="#" className="w-full flex flex-col gap-4" onSubmit={formik.handleSubmit}>
        {loginInput.map((eachInput) => {
          return <Input key={eachInput.id} {...eachInput} onChange={formik.handleChange}
          onBlur={formik.handleBlur} />;
        })}
        <PrimayBtn type='submit' addClass="uppercase">Login</PrimayBtn>
        <PrimayBtn addClass="!bg-secondary flex items-center justify-center gap-3">
          <span>
            <AiFillGithub size={25} />
          </span>
          <span className="uppercase">Github</span>
        </PrimayBtn>
        <Link className="underline text-sm" href="/register">
          Do you have no an account?
        </Link>
      </form>
    </div>
  );
};

export default Login;
