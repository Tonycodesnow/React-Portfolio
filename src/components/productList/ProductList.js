import "./productList.css";
import Product from "../product/Product";

const data = [
  {
    id: 1,
    name: "National Park Search",
    img: process.env.PUBLIC_URL + "/img/nationalparksearch.png",
    link: "https://tonycodesnow.github.io/NationalParkSearch/",
  },
  {
    id: 2,
    name: "Weather Dashboard",
    img: process.env.PUBLIC_URL + "/img/Right-Now-Weather.png",
    link: "https://tonycodesnow.github.io/Right-Now-Weather/",
  },
  {
    id: 3,
    name: "Note Taker",
    img: process.env.PUBLIC_URL + "/img/NotesPage.png",
    link: "https://radiant-brook-87611.herokuapp.com/",
  },
  {
    id: 4,
    name: "Giftby",
    img: process.env.PUBLIC_URL + "/img/Giftby1.png",
    link: "https://the-giftby.herokuapp.com/",
  },
];


// a function that returns a list of products from the gallery array in data.js in the forn of a list of product components such as the img, link, and id
function ProductList() {
  return (
    <div className="pl">
      <div className="pl-text">
        <h1 className="pl-title">My Work</h1>
      </div>
      <div className="pl-list">
        {data.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
          ))}
      </div>
    </div>
  );
}


export default ProductList;
