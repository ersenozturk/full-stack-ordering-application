import Image from "next/image";
import Title from "../../components/ui/Title";

//1 Product page
const Index = () => {
  return (
    <div className="flex h-screen items-center gap-20">
      <div className="relative flex-1 h-[80%] w-[80%]">
        <Image src="/images/food.png" alt="" fill />
      </div>
      <div className="flex-1">
        <Title titleClass="text-[6xl]">Good Pizza</Title>
        <span>$19</span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
          molestiae amet commodi libero corporis, facilis provident praesentium
          eaque laudantium alias unde voluptatem. Adipisci rerum nam provident
          amet iste cumque exercitationem?
        </p>
        <div>
          <h4>Choose the size</h4>
          <div className="raletive ">
            {/* <Image src='/images/food.png' alt="" fill/> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
