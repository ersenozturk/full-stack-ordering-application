import Input from "../form/Input";
import Title from "./Title";
import PrimayBtn from "./PrimayBtn";

const Book = () => {
  return (
    <div className="container mx-auto sm:p-4 md:p-20">
      <div className="flex items-start">
        <Title titleClass="text-[2.5rem] mb-4 ">Book a Reservation</Title>
      </div>
      <div className="flex flex-wrap-reverse gap-4">
        <form action="#" className="flex flex-1 flex-col justify-between gap-4">
          <Input type="text" span="Your Full Name" />
          <Input type="num" span="Your Phone Number" />
          <Input type="email" span="Your Email" />
          <Input type="num" span="How Many Person?" />
          <Input type="date" span="mm/dd/yyyy" />
          <div className="flex items-start">
            <PrimayBtn>BOOK NOW</PrimayBtn>
          </div>
        </form>
        <div className="flex-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.2899750813544!2d15.91509941587134!3d41.62786318901498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13379b015277c75b%3A0x620dab89f54a03d3!2sGinger%20food%20%26%20drink!5e0!3m2!1str!2str!4v1669636344479!5m2!1str!2str"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Book;
