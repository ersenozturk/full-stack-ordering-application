import Image from "next/image";
import Title from "../../components/ui/Title";
import { AiOutlineHome, AiOutlineLock } from "react-icons/ai";
import { MdExitToApp, MdFastfood } from "react-icons/md";
import { useFormik } from "formik";
import { profileSchema } from "../../schema/profileSchema";
import Input from "../../components/form/Input";
import PrimayBtn from "../../components/ui/PrimayBtn";

const Profile = () => {
  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  };

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
        touched:formik.touched.fullName
    },
    {
      id: 2,
      name: "phone",
      type: "tel",
      span: "Your Phone Number",
        value: formik.values.phone,
        errorMessage: formik.errors.phone,
        touched:formik.touched.phone
    },
    {
      id: 3,
      name: "email",
      type: "email",
      span: "Your Email",
        value: formik.values.email,
        errorMessage: formik.errors.email,
        touched:formik.touched.email
    },
    {
      id: 4,
      name: "address",
      type: "text",
      span: "Your Address",
        value: formik.values.address,
        errorMessage: formik.errors.address,
        touched:formik.touched.address
    },
    {
      id: 5,
      name: "job",
      type: "text",
      span: "Your Job",
        value: formik.values.job,
        errorMessage: formik.errors.job,
        touched:formik.touched.job
    },
    {
      id: 6,
      name: "bio",
      type: "text",
      span: "Your Bio",
        value: formik.values.bio,
        errorMessage: formik.errors.bio,
        touched:formik.touched.bio
    },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh_-_433px)] p-10 gap-x-10">
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
          <li className="w-full">
            <button className="flex items-center gap-x-2 w-full p-2 text-lg hover:text-white text-black hover:bg-primary transition-colors delay-75 font-semibold ">
              <span>
                <AiOutlineHome />{" "}
              </span>
              <span>Account</span>
            </button>
          </li>
          <li className="w-full">
            <button className="flex items-center gap-x-2 w-full p-2 text-lg hover:text-white text-black hover:bg-primary transition-colors delay-75 font-semibold ">
              <span>
                <AiOutlineLock />{" "}
              </span>
              <span>Password</span>
            </button>
          </li>
          <li className="w-full">
            <button className="flex items-center gap-x-2 w-full p-2 text-lg hover:text-white text-black hover:bg-primary transition-colors delay-75 font-semibold ">
              <span>
                <MdFastfood />{" "}
              </span>
              <span>Orders</span>
            </button>
          </li>
          <li className="w-full">
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
        <Title titleClass="text-[2.5rem] ">Account Settings</Title>
        <form action="#" onSubmit={formik.handleSubmit}>
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
      </div>
    </div>
  );
};

export default Profile;
