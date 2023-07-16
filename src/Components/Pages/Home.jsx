
import { useLoaderData } from "react-router-dom";
import ChefCard from "./ChefCard";
import Banner from "./Sections/Banner";
import Intro from "./Sections/Intro";
import Trending from "./Sections/Trending";
import Contact from "./Sections/Contact";
import Gallery from "./Sections/Gallery";
const Home = () => {
  const chefs = useLoaderData();
  // console.log(chefs);
  return (
    <div>
      <Banner></Banner>
      <Intro></Intro>

      <section className="container-fluid bg-dark">
        <h3 className="text-center fw-bolder text-warning p-2">
          Our Best Chefs
        </h3>
        <div className="row">
          {chefs.map((chef) => (
            <ChefCard key={chef.id} chef={chef}></ChefCard>
          ))}
        </div>
      </section>
      <Gallery></Gallery>
      <Contact></Contact>
      <Trending></Trending>

    </div>
  );
};

export default Home;
