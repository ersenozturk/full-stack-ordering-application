import Image from "next/image";
import PrimayBtn from "../../components/ui/PrimayBtn";
import Title from "../../components/ui/Title";

const Cart = () => {
  return (
    <div className="min-h-[calc(100vh_-_433px)]">
      <div className="flex justify-between items-center flex-col md:flex-row">
        <div className="md:min-h-[calc(100vh_-_433px)] flex items-center flex-1 p-10 overflow-x-auto">
          <table className="w-full mx-5 text-sm text-center text-gray-500 min-w-full">
            <thead className="text-xs text-gray-400 bg-gray-700 uppercase">
              <tr className="border border-gray-700">
                <th scope="col" className="py-3 px-6">PRODUCT</th>
                <th scope="col" className="py-3 px-6">EXTRAS</th>
                <th scope="col" className="py-3 px-6">PRICE</th>
                <th scope="col" className="py-3 px-6">QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border border-gray-700 bg-secondary  hover:bg-primary transition-colors delay-100">
                <td className="flex items-center justify-center gap-x-2 py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100 " >
                  <Image src="/images/food.png" alt="" width={50} height={50} />
                  <span>Good Pizza</span>
                </td>
                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100' >
                  mayonez, acı sos, ketçap
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100 ">$20</td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100 ">1</td>
              </tr>
              <tr className="border border-gray-700 bg-secondary  hover:bg-primary transition-colors delay-100">
                <td className="flex items-center justify-center gap-x-2 py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100 " >
                  <Image src="/images/food.png" alt="" width={50} height={50} />
                  <span>Good Pizza</span>
                </td>
                <td className='py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100' >
                  mayonez, acı sos, ketçap
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100 ">$20</td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-white transition-colors delay-100 ">1</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-secondary min-h-[calc(100vh_-_433px)] flex flex-col justify-center text-white p-12 w-full md:w-auto text-center md:text-start">
          <Title titleClass="text-[40px]">CART TOTAL</Title>

          <div className="mt-6">
            <b>Subtotal: </b>$20 <br />
            <b className=" inline-block my-1">Discount: </b>$0.00 <br />
            <b>Total: </b>$20
          </div>

          <PrimayBtn className="btn-primary mt-4">CHECKOUT NOW!</PrimayBtn>
        </div>
      </div>
    </div>
  );
};

export default Cart;