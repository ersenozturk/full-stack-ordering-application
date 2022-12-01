import Image from "next/image";
import { useState } from "react";
import PrimayBtn from "../../components/ui/PrimayBtn";
import Title from "../../components/ui/Title";

// const initialProductPriceArr = [30, 51, 73];
const initialProductPriceArr = [10,11,12];
const initialExtraArr = [
  {
    id: 1,
    name: "Extra 1",
    priceExtra: 1,
  },
  {
    id: 2,
    name: "Extra 2",
    priceExtra: 2,
  },
  {
    id: 3,
    name: "Extra 3",
    priceExtra: 3,
  },
];

//! Product page
const Index = () => {
  const [priceArr, setPriceArr] = useState(initialProductPriceArr);
  const [price, setPrice] = useState(priceArr[0]);
  const [productSize, setProductSize] = useState(0);

  const [extraItem, setExtraItem] = useState(initialExtraArr);
  const [extras, setExtras] = useState([]);

  //? for product size
  const handleSize = (element) => {
    setProductSize(element);
    const difference = priceArr[element] - priceArr[productSize];
    changePrice(difference);

    // console.log('element',element);
    // console.log('productSize',productSize)
    // console.log('priceArr[element]',priceArr[element]);
    // console.log('priceArr[productSize]',priceArr[productSize])
    // console.log(difference);
  };

  //? for checkbox extra items
  const handleExtraChange = (e, each) => {
    if (e.target.checked) {
      changePrice(each.priceExtra);
      setExtras([...extras, each]);
    } else {
      changePrice(-each.priceExtra);
      setExtras(extras.filter((clicked) => clicked.id !== each.id));
    }
  };

  //? for show price on the screen
  const changePrice = (elemet) => {
    setPrice(price + elemet);
  };

  return (
    <div className="flex h-screen items-center gap-20 p-20">
      <div className="relative flex-1 h-[80%] w-[80%]">
        <Image src="/images/food.png" alt="" fill />
      </div>

      <div className="flex-1 flex flex-col items-start justify-evenly gap-9">
        <Title titleClass="text-6xl">Good Pizza</Title>
        <span className="text-primary border-b-[2px] border-primary font-extrabold text-3xl">
          $ {price}
        </span>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
          molestiae amet commodi libero corporis, facilis provident praesentium
          eaque laudantium alias unde voluptatem. Adipisci rerum nam provident
          amet iste cumque exercitationem?
        </p>
        <div>
          <h4 className="my-5 font-bold text-lg">Choose the size</h4>
          <div className="flex gap-4">
            <span onClick={() => handleSize(0)}>
              <PrimayBtn addClass="!text-black  font-light text-base px-6 py-2 rounded-xl">
                Small
              </PrimayBtn>
            </span>
            <span onClick={() => handleSize(1)}>
              <PrimayBtn addClass="!text-black  font-medium text-lg px-6 py-2 rounded-xl">
                Medium
              </PrimayBtn>
            </span>
            <span onClick={() => handleSize(2)}>
              <PrimayBtn addClass="!text-black  font-bold text-xl px-6 py-2 rounded-xl">
                Large
              </PrimayBtn>
            </span>
          </div>
        </div>
        <div className="flex gap-4 ">
          {extraItem.map((each) => {
            const { id, name, priceExtra } = each;
            return (
              <label
                key={id}
                htmlFor="ketchup"
                className="flex gap-x-1 items-center"
              >
                <input
                  type="checkbox"
                  name={name}
                  id={id}
                  className="w-5 h-5 accent-primary"
                  onChange={(e) => handleExtraChange(e, each)}
                />
                <span className="font-semibold">{name}</span>
              </label>
            );
          })}
        </div>
        <PrimayBtn>Add to Cart</PrimayBtn>
      </div>
    </div>
  );
};

export default Index;
