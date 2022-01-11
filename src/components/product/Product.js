import "./product.css";
import p1 from "../../img/Giftby1.png"
import p2 from "../../img/nationalparksearch.png"
import p3 from "../../img/Right-Now-Weather.png"
import p4 from "../../img/NotesPage.png"

const Product = ({img,link}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href= {link}>
        <img src={img} alt="" className= "p-img" />
      </a>

    </div>
  );
}

export default Product;
