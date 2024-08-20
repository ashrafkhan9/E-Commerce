import Hero from "../components/Hero/Hero.jsx";
import NewCollections from "../components/NewCollections/NewCollections.jsx";
import NewsLetter from "../components/NewsLetter/NewsLetter.jsx";
import Offers from "../components/Offers/Offers.jsx";
import Popular from "../components/Popular/Popular.jsx";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
};

export default Shop;
