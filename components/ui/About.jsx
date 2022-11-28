import Image from "next/image";
import Title from "./Title";
import PrimayBtn from "./PrimayBtn";

const About = () => {
  return (
    <div className="bg-secondary p-4 sm:p-24 ">
      <div className="container mx-auto flex flex-col sm:flex-row gap-4 sm:gap-24  text-white ">
        <div className="relative w-[445px] h-[600px] flex-1">
          <Image src="/images/about-img.png" alt="" fill />
        </div>
        <div className="flex flex-col items-start justify-center flex-1 gap-5">
          <Title titleClass="text-[2.5rem]"> We Are Ginger</Title>
          <p className="text-base">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&rsquo;t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn&rsquo;t anything embarrassing hidden in
            the middle of text. All
          </p>
          <PrimayBtn>Read More</PrimayBtn>
        </div>
      </div>
    </div>
  );
};

export default About;
