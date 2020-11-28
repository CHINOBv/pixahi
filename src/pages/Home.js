import Search from "components/Search";
import Images from "components/Images/Images";

const Home = () => {
  //console.log(imagesInf);
  return (
    <div>
      <div>
        <Search />
      </div>
      <div className="container">
        <Images />
      </div>
    </div>
  );
};

export default Home;
