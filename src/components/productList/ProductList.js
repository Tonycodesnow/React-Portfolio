import "./productList.css";
import Product from "../product/Product"
import gallery from "../../data";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-text">
        <h1 className="pl-title">My Work</h1>
        <p className="pl-desc">
          Here are some of my projects.
        </p>
      </div>
      <div className="pl-list">
        {gallery.map((item) => (
          <Product key={item.id} img={item.img} link={item.link}/>
        ))}
    </div>
    </div>
  )
}

export default ProductList;
