import Image from "next/image";
import PrimayBtn from "../../components/ui/PrimayBtn";
import Title from "../../components/ui/Title";

//1 Product page
const Index = () => {
  return (
    <div className="flex h-screen items-center gap-20 p-20">
      <div className="relative flex-1 h-[80%] w-[80%]">
        <Image src="/images/food.png" alt="" fill />
      </div>
      <div className="flex-1 flex flex-col items-start justify-evenly gap-9">
        <Title titleClass="text-6xl">Good Pizza</Title>
        <span className="text-primary border-b-[2px] border-primary font-extrabold text-3xl">$19</span>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
          molestiae amet commodi libero corporis, facilis provident praesentium
          eaque laudantium alias unde voluptatem. Adipisci rerum nam provident
          amet iste cumque exercitationem?
        </p>
        <div>
          <h4 className="my-5 font-bold text-lg">Choose the size</h4>
          <div className="flex gap-4">
            <PrimayBtn addClass="!text-black  font-light text-base px-6 py-2 rounded-xl">
              Small
            </PrimayBtn>
            <PrimayBtn addClass="!text-black  font-medium text-lg px-6 py-2 rounded-xl">
              Medium
            </PrimayBtn>
            <PrimayBtn addClass="!text-black  font-bold text-xl px-6 py-2 rounded-xl">
              Large
            </PrimayBtn>
          </div>
        </div>
        <div className="flex gap-4 ">
          <label htmlFor="ketchup" className="flex gap-x-1 items-center">
            <input type="checkbox" name="ketchup" id="ketchup" className="w-5 h-5 accent-primary" />
            <span className="font-semibold">ketchup</span>
          </label>
          <label htmlFor="mayonnaise" className="flex gap-x-1 items-center">
            <input type="checkbox" name="mayonnaise" id="mayonnaise" className="w-5 h-5 accent-primary" />
            <span className="font-semibold">mayonnaise</span>
          </label>
          <label htmlFor="mustard" className="flex gap-x-1 items-center">
            <input type="checkbox" name="mustard" id="mustard" className="w-5 h-5 accent-primary" />
            <span className="font-semibold">mustard</span>
          </label>
        </div>
        <PrimayBtn>Add to Cart</PrimayBtn>
      </div>
    </div>
  );
};

export default Index;
