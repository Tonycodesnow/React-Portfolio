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
    name: "Extraordinary Cakes",
    img: process.env.PUBLIC_URL + "/img/Cakes.png",
    link: "https://jili-cakeshop.herokuapp.com/",
  },
  {
    id: 3,
    name: "Budget Tracker",
    img: process.env.PUBLIC_URL + "/img/Budget-Tracker-sc.png",
    link: "https://trackingbudgets.herokuapp.com/",
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
