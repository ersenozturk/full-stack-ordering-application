import MenuWrapper from "../../components/product/MenuWrapper";
import About from "../../components/ui/About";
import Book from "../../components/ui/Book";
import Campaigns from "../../components/ui/Campaigns";
import Carousel from "../../components/ui/Carousel";

//! Home page index
const Index = () => {
  return (
    <div>
      <Carousel/>
      <Campaigns/>
      <MenuWrapper/>
      <About/>
      <Book/>

    </div>
  );
};

export default Index;
