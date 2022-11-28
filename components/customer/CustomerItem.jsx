import Image from "next/image";

const CustomerItem = ({imgSrc,h3}) => {
  return (
    <div className="mx-4">
      <div className="p-6 bg-secondary text-white rounded-md">
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <h3 className="text-lg font-semibold">{h3}</h3>
        <h4 className="text-[.9rem]">Lorem ipsum</h4>
      </div>
      <div className="relative h-28 w-28 border-4 border-primary  rounded-full mt-8 before:content[''] before:absolute before:top-[-12px] before:left-[40px] before:bg-primary before:w-5 before:h-5 before:rotate-45">
        <Image
          src={imgSrc}
          alt=""
          fill
          className="rounded-full"
        />
      </div>
    </div>
  );
};

export default CustomerItem;
