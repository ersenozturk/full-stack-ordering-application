import Image from "next/image";
import Title from "../../components/ui/Title";
import { BiCategoryAlt } from "react-icons/bi";
import { SiIfood } from "react-icons/si";
import { MdExitToApp, MdFastfood } from "react-icons/md";
import Input from "../../components/form/Input";
import PrimayBtn from "../../components/ui/PrimayBtn";
import { useState } from "react";
import { useFormik } from "formik";
import { footerSchema } from "../../schema/profileSchema";

const AdminProfile = () => {
  const [tabs, setTabs] = useState(0);
  const [inputText, seInputText] = useState("");
  const [categories, setCategories] = useState(["pizza", "hamburger"]);

  const handleAddClick = () => {
    setCategories([...categories, inputText]);
    seInputText("");
  };

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    actions.resetForm();
  };

  //!   footerSettings-0
  const formik = useFormik({
    initialValues: {
      location: "",
      phone: "",
      email: "",
      desc: "",
      writeDay: "",
      writeTime: "",
    },
    onSubmit,
    validationSchema: footerSchema,
  });

  const footerInputs = [
    {
      id: 1,
      name: "location",
      type: "text",
      span: "Your Location",
      value: formik.values.location,
      errorMessage: formik.errors.location,
      touched: formik.touched.location,
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
      name: "desc",
      type: "text",
      span: "Write a Describtion",
      value: formik.values.desc,
      errorMessage: formik.errors.desc,
      touched: formik.touched.desc,
    },
    {
      id: 5,
      name: "writeDay",
      type: "text",
      span: "Write a Day",
      value: formik.values.writeDay,
      errorMessage: formik.errors.writeDay,
      touched: formik.touched.writeDay,
    },
    {
      id: 6,
      name: "writeTime",
      type: "text",
      span: "Write a Time",
      value: formik.values.writeTime,
      errorMessage: formik.errors.writeTime,
      touched: formik.touched.writeTime,
    },
  ];
  //!   footerSettings-1

  return (
    <div className="flex flex-col md:flex-row min-h-[calc(100vh_-_433px)] p-2 md:p-10 gap-x-10">
      <div className="drop-shadow-2xl shadow-2xl border-gray-400 border-2 h-full flex-shrink-0">
        <div className="flex flex-col justify-center items-center p-6 border-b-2 border-gray-400">
          <div className="relative w-28 h-28 items-center">
            <Image
              src="/images/admin/admin.png"
              alt=""
              fill
              className=" rounded-full"
            />
          </div>
          <h2 className="text-2xl font-bold mt-3">_Admin_</h2>
        </div>

        <ul className="flex flex-col items-start">
          <li className="w-full" onClick={() => setTabs(0)}>
            <button
              className={`flex items-center gap-x-2 w-full p-2 text-lg hover:text-white text-black hover:bg-primary transition-colors delay-75 font-semibold ${
                tabs === 0 && "!text-white bg-primary"
              }`}
            >
              <span>
                <SiIfood />{" "}
              </span>
              <span>Products</span>
            </button>
          </li>
          <li className="w-full" onClick={() => setTabs(1)}>
            <button
              className={`flex items-center gap-x-2 w-full p-2 text-lg hover:text-white text-black hover:bg-primary transition-colors delay-75 font-semibold ${
                tabs === 1 && "!text-white bg-primary"
              }`}
            >
              <span>
                <MdFastfood />{" "}
              </span>
              <span>Orders</span>
            </button>
          </li>
          <li className="w-full" onClick={() => setTabs(2)}>
            <button
              className={`flex items-center gap-x-2 w-full p-2 text-lg hover:text-white text-black hover:bg-primary transition-colors delay-75 font-semibold ${
                tabs === 2 && "!text-white bg-primary"
              }`}
            >
              <span>
                <BiCategoryAlt />{" "}
              </span>
              <span>Categories</span>
            </button>
          </li>
          <li className="w-full" onClick={() => setTabs(3)}>
            <button
              className={`flex items-center gap-x-2 w-full p-2 text-lg hover:text-white text-black hover:bg-primary transition-colors delay-75 font-semibold ${
                tabs === 3 && "!text-white bg-primary"
              }`}
            >
              <span>
                <BiCategoryAlt />{" "}
              </span>
              <span>Footer</span>
            </button>
          </li>
          <li className="w-full" onClick={() => setTabs(4)}>
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
        {/* products */}
        {tabs === 0 && (
          <>
            <Title titleClass="text-[2.5rem] mb-4 text-left ">Products</Title>
            <div className="flex items-center flex-1  overflow-x-auto">
              <table className="w-full mx-5 text-sm text-center text-gray-500 min-w-full">
                <thead className="text-xs text-gray-400 bg-gray-700 uppercase">
                  <tr className="border border-gray-700">
                    <th scope="col" className="py-3 px-6">
                      IMAGE
                    </th>
                    <th scope="col" className="py-3 px-6">
                      ID
                    </th>
                    <th scope="col" className="py-3 px-6">
                      TITLE
                    </th>
                    <th scope="col" className="py-3 px-6">
                      PRICE
                    </th>
                    <th scope="col" className="py-3 px-6">
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-gray-700 bg-secondary  hover:bg-primary transition-colors delay-100">
                    <td className="relative py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100 flex justify-center items-center">
                      <Image
                        src="/images/food.png"
                        alt=""
                        width={50}
                        height={50}
                      />
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100">
                      asdas651..
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100 ">
                      Good Pizza
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100 ">
                      $ 10
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100 ">
                      <PrimayBtn addClass="!bg-red-500">Delete</PrimayBtn>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
        {/* order */}
        {tabs === 1 && (
          <>
            <Title titleClass="text-[2.5rem] mb-4 text-left ">Orders</Title>
            <div className="flex items-center flex-1  overflow-x-auto">
              <table className="w-full mx-5 text-sm text-center text-gray-500 min-w-full">
                <thead className="text-xs text-gray-400 bg-gray-700 uppercase">
                  <tr className="border border-gray-700">
                    <th scope="col" className="py-3 px-6">
                      PRODUCT
                    </th>
                    <th scope="col" className="py-3 px-6">
                      CUSTOMER
                    </th>
                    <th scope="col" className="py-3 px-6">
                      TOTAL
                    </th>
                    <th scope="col" className="py-3 px-6">
                      PAYMENT{" "}
                    </th>
                    <th scope="col" className="py-3 px-6">
                      STATUS
                    </th>
                    <th scope="col" className="py-3 px-6">
                      ACTION
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-gray-700 bg-secondary  hover:bg-primary transition-colors delay-100">
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100 ">
                      1234..
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100">
                      Ersen OZTURK
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100 ">
                      $ 10
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100 ">
                      Cash
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100 ">
                      Preparing
                    </td>
                    <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100 ">
                      <PrimayBtn addClass="!bg-green-500">Next Stage</PrimayBtn>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
        {/* categories */}
        {tabs === 2 && (
          <>
            <Title titleClass="text-[2.5rem] mb-4 text-left ">Categories</Title>
            <div className="my-6 flex justify-between items-center gap-x-5">
              <Input
                span="Add a new category.."
                onChange={(e) => seInputText(e.target.value)}
                value={inputText}
              />
              {/* <PrimayBtn type='click' onClick={()=>setCategories([...categories,inputText])}>Add</PrimayBtn> */}
              <button className="btn-primary" onClick={handleAddClick}>
                Add2
              </button>
            </div>
            {categories.map((eachCategory, i) => {
              return (
                <div
                  className="flex justify-between items-center gap-x-5 my-5"
                  key={i}
                >
                  <b>{eachCategory}</b>
                  {/* <PrimayBtn addClass="!bg-red-500">Delete</PrimayBtn> */}
                  <button
                    className="!bg-red-500 btn-primary"
                    onClick={() =>
                      setCategories(
                        categories.filter(
                          (clickedCategory) => clickedCategory !== eachCategory
                        )
                      )
                    }
                  >
                    Delete2
                  </button>
                </div>
              );
            })}
          </>
        )}
        {/* footer */}
        {tabs === 3 && (
          <>
            <form action="#" onSubmit={formik.handleSubmit}>
              <Title titleClass="text-[2.5rem] mb-4 text-left ">
                Footer Settings
              </Title>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
                {footerInputs.map((eachInput) => {
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
          </>
        )}
      </div>
    </div>
  );
};

export default AdminProfile;
