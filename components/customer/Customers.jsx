import CustomerItem from "./CustomerItem";
import Title from "../ui/Title";
import Slider from "react-slick";
import { GrPrevious, GrNext } from "react-icons/gr";

const Customers = () => {
  const NextBtn = ({ onClick }) => {
    return (
      <button
        className="w-12 h-12 border bg-primary rounded-full flex items-center justify-center absolute -bottom-12 left-1/2 mx-1"
        // onClick={onclick}
      >
        <GrNext />
      </button>
    );
  };

  function PrevBtn({ onClick }) {
    return (
      <button
        className="w-12 h-12 border bg-primary rounded-full flex items-center justify-center absolute -bottom-12 right-1/2 mx-1"
        // onClick={onclick}
      >
        <GrPrevious />
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto mb-20">
      <Title titleClass="text-[2.5rem] mb-10">What Says Our Customers</Title>
      <Slider {...settings}>
        <CustomerItem imgSrc="/images/customer1.jpg" h3="Ersen OZTURK" />
        <CustomerItem imgSrc="/images/customer2.jpg" h3="Sahinder OZTURK" />
        <CustomerItem imgSrc="/images/customer1.jpg" h3="Ersen OZTURK" />
        <CustomerItem imgSrc="/images/customer2.jpg" h3="Gunes OZTURK" />
      </Slider>
    </div>
  );
};

export default Customers;