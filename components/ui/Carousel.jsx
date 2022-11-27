import Image from "next/image";
import Title from "../ui/Title";
import PrimaryBtn from "../ui/PrimayBtn";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:30000,
    appendDots: dots => (
        <ul> {dots} </ul>
    )
  };
  return (
    <div className="h-screen w-full container mx-auto -mt-[88px]">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="relative h-full w-full">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <Slider {...settings}>
        <div>
          <div className="mt-48 text-white flex flex-col items-start gap-y-10">
            <Title titleClass="text-6xl">Fast Food Restaurant</Title>
            <p className="text-sm sm:w-2/5 w-full">
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, sunt repellat dolore, iste magni
              quos nihil ducimus libero ipsam.
            </p>
            <PrimaryBtn>Order Now</PrimaryBtn>
          </div>
        </div>
        <div>
          <div className="mt-48 text-white  flex flex-col items-start gap-y-10">
            <Title titleClass="text-6xl">Fast Food Restaurant</Title>
            <p className="text-sm sm:w-2/5 w-full">
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, sunt repellat dolore, iste magni
              quos nihil ducimus libero ipsam.
            </p>
            <PrimaryBtn>Order Now</PrimaryBtn>
          </div>
        </div>
        <div>
          <div className="mt-48 text-white  flex flex-col items-start gap-y-10">
            <Title titleClass="text-6xl">Fast Food Restaurant</Title>
            <p className="text-sm sm:w-2/5 w-full">
              Doloremque, itaque aperiam facilis rerum, commodi, temporibus
              sapiente ad mollitia laborum quam quisquam esse error unde.
              Tempora ex doloremque, labore, sunt repellat dolore, iste magni
              quos nihil ducimus libero ipsam.
            </p>
            <PrimaryBtn>Order Now</PrimaryBtn>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
