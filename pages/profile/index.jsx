import Image from "next/image";
import Title from "../../components/ui/Title";
import { AiOutlineHome, AiOutlineLock } from "react-icons/ai";
import { MdExitToApp, MdFastfood } from "react-icons/md";
import { useFormik } from "formik";
import { profileSchema, passwordSchema } from "../../schema/profileSchema";
import Input from "../../components/form/Input";
import PrimayBtn from "../../components/ui/PrimayBtn";
import { useState } from "react";

const Profile = () => {
  const [tabs, setTabs] = useState(0);

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  };

  //!   accountSettings-0
  const formik = useFormik({
    initialValues: {
      fullName: "",
      phone: "",
      email: "",
      address: "",
      bio: "",
      job: "",
    },
    onSubmit,
    validationSchema: profileSchema,
  });

  const adminInputs = [
    {
      id: 1,
      name: "fullName",
      type: "text",
      span: "Your Full Name",
      value: formik.values.fullName,
      errorMessage: formik.errors.fullName,
      touched: formik.touched.fullName,
    },
    {
      id: 2,
      name: "phone",
      type: "tel",
      span: "Your Phone Number",
      value: formik.values.phone,
      errorMessage: formik.errors.phone,
      touched: formik.touched.phone,
    },
    {
      id: 3,
      name: "email",
      type: "email",
      span: "Your Email",
      value: formik.values.email,
      errorMessage: formik.errors.email,
      touched: formik.touched.email,
    },
    {
      id: 4,
      name: "address",
      type: "text",
      span: "Your Address",
      value: formik.values.address,
      errorMessage: formik.errors.address,
      touched: formik.touched.address,
    },
    {
      id: 5,
      name: "job",
      type: "text",
      span: "Your Job",
      value: formik.values.job,
      errorMessage: formik.errors.job,
      touched: formik.touched.job,
    },
    {
      id: 6,
      name: "bio",
      type: "text",
      span: "Your Bio",
      value: formik.values.bio,
      errorMessage: formik.errors.bio,
      touched: formik.touched.bio,
    },
  ];
  //!   accountSettings-1

  //!   passwordSettings-0
  const formikPassword = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    onSubmit,
    validationSchema: passwordSchema,
  });

  const passwordInputs = [
    {
      id: 1,
      name: "password",
      type: "password",
      span: "Your a new Password",
      value: formikPassword.values.password,
      errorMessage: formikPassword.errors.password,
      touched: formikPassword.touched.password,
    },
    {
      id: 2,
      name: "confirmPassword",
      type: "password",
      span: "Confirm your new password and type again",
      value: formikPassword.values.confirmPassword,
      errorMessage: formikPassword.errors.confirmPassword,
      touched: formikPassword.touched.confirmPassword,
    },
  ];
  //!   passwordSettings-1
  //!   orderSettings-0
  //!   orderSettings-1

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh_-_433px)] p-2 md:p-10 gap-x-10">
      <div className="drop-shadow-2xl shadow-2xl border-gray-400 border-2 h-full flex-shrink-0">
        <div className="flex flex-col justify-center items-center p-6 border-b-2 border-gray-400">
          <div className="relative w-28 h-28 items-center">
            <Image
              src="/images/profile/ers.jpg"
              alt=""
              fill
              className=" rounded-full"
            />
          </div>
          <h2 className="text-2xl font-bold mt-3">Ersen OZTURK</h2>
        </div>

        <ul className="flex flex-col items-start">
          <li className="w-full" onClick={() => setTabs(0)}>
            <button
              className={`flex items-center gap-x-2 w-full p-2 text-lg hover:text-white text-black hover:bg-primary transition-colors delay-75 font-semibold ${
                tabs === 0 && "!text-white bg-primary"
              }`}
            >
              <span>
                <AiOutlineHome />{" "}
              </span>
              <span>Account</span>
            </button>
          </li>
          <li className="w-full" onClick={() => setTabs(1)}>
            <button
              className={`flex items-center gap-x-2 w-full p-2 text-lg hover:text-white text-black hover:bg-primary transition-colors delay-75 font-semibold ${
                tabs === 1 && "!text-white bg-primary"
              }`}
            >
              <span>
                <AiOutlineLock />{" "}
              </span>
              <span>Password</span>
            </button>
          </li>
          <li className="w-full" onClick={() => setTabs(2)}>
            <button
              className={`flex items-center gap-x-2 w-full p-2 text-lg hover:text-white text-black hover:bg-primary transition-colors delay-75 font-semibold ${
                tabs === 2 && "!text-white bg-primary"
              }`}
            >
              <span>
                <MdFastfood />{" "}
              </span>
              <span>Orders</span>
            </button>
          </li>
          <li className="w-full" onClick={() => setTabs(3)}>
            <button className="flex items-center gap-x-2 w-full p-2 text-lg hover:text-white text-black hover:bg-primary transition-colors delay-75 font-semibold ">
              <span>
                <MdExitToApp />
              </span>
              <span>Exit</span>
            </button>
          </li>
        </ul>
      </div>

      <div className="flex-1">
        {/* account */}
        {tabs === 0 && (
          <form action="#" onSubmit={formik.handleSubmit}>
            <Title titleClass="text-[2.5rem] ">Account Settings</Title>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              {adminInputs.map((eachInput) => {
                return (
                  <Input
                    key={eachInput.id}
                    {...eachInput}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                );
              })}
            </div>

            <PrimayBtn type="submit">UPDATE</PrimayBtn>
          </form>
        )}
        {/* profile */}
        {tabs === 1 && (
          <form action="#" onSubmit={formikPassword.handleSubmit}>
            <Title titleClass="text-[2.5rem] ">Password Settings</Title>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              {passwordInputs.map((eachInput) => {
                return (
                  <Input
                    key={eachInput.id}
                    {...eachInput}
                    onChange={formikPassword.handleChange}
                    onBlur={formikPassword.handleBlur}
                  />
                );
              })}
            </div>

            <PrimayBtn type="submit">UPDATE</PrimayBtn>
          </form>
        )}
        {/* orders */}
        {tabs === 2 && (
          <>
            <Title titleClass="text-[2.5rem] mb-4">My Orders</Title>

            <div className="flex items-center flex-1  overflow-x-auto">
              <table className="w-full mx-5 text-sm text-center text-gray-500 min-w-full">
                <thead className="text-xs text-gray-400 bg-gray-700 uppercase">
                  <tr className="border border-gray-700">
                    <th scope="col" className="py-3 px-6">
                      ID
                    </th>
                    <th scope="col" className="py-3 px-6">
                      ADDRESS
                    </th>
                    <th scope="col" className="py-3 px-6">
                      DATE
                    </th>
                    <th scope="col" className="py-3 px-6">
                      TOTAL
                    </th>
                    <th scope="col" className="py-3 px-6">
                      STATUS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-gray-700 bg-secondary  hover:bg-primary transition-colors delay-100">
                    <td className="flex items-center justify-center gap-x-2 py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100 ">
                      <span>dasdoh9y8asıd</span>
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100">
                      Buca/Izmir
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100 ">
                      date....
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100 ">
                      1
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100 ">
                      delivered
                    </td>
                  </tr>
                  <tr className="border border-gray-700 bg-secondary  hover:bg-primary transition-colors delay-100">
                    <td className="flex items-center justify-center gap-x-2 py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100 ">
                      <span>dasdoh9y8asıd</span>
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100">
                      Buca/Izmir
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100 ">
                      date....
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100 ">
                      1
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100 ">
                      delivered
                    </td>
                  </tr>
                  <tr className="border border-gray-700 bg-secondary  hover:bg-primary transition-colors delay-100">
                    <td className="flex items-center justify-center gap-x-2 py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100 ">
                      <span>dasdoh9y8asıd</span>
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100">
                      Buca/Izmir
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100 ">
                      date....
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100 ">
                      1
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100 ">
                      delivered
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;
