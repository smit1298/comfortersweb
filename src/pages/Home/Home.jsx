import Carousel from "../../components/Carousel/Carousel";
import Card from "../../components/Card/Card";

import firstCardImage from "../../images/spell.jpg";
import secondCardImage from "../../images/group.jpg";
import thirdCardImage from "../../images/relief.jpg";

import "./Home.css";

const Home = () => (
  <main className="home">
    <Carousel />

    <h1>Donate to our cause</h1>
    <div className="card-container">
      <Card
        source={firstCardImage}
        description="a man handing something to 2 children"
        heading="Sponsor a Child"
        paragraph='"One of the most powerful forces on Earth is the prayer of a child" says a wise man, so we employ you to join us as we sojourn to put our nation right by putting our children right.'
      />
      <Card
        source={secondCardImage}
        description="children in school uniform"
        heading="Education as a Treasure"
        paragraph='A saying goes thus, "He who opens a school door, closes a prison", so we as a team are committed to making sure that Education is widely spread in Nigeria and beyond as we have the capacity.'
      />
      <Card
        source={thirdCardImage}
        description="a man giving a lady something"
        heading="Relieving Poverty"
        paragraph='"Overcoming poverty is not a act of charity, it is the protection of fundamental human right, the right to dignity and decent life". We are committed to making this possible thereby making the nation a better place.'
      />
    </div>
  </main>
);

export default Home;