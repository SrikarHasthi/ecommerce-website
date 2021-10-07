import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { addCreator } from "../redux/actions";

import "./ProductDetail.css";
let ProductDetail = () => {
  let history=useHistory("/cart")
  let dispatcher=useDispatch();
  let { id } = useParams();
  let data = useSelector((state) => state.data);
  let reqdata = data.filter((el) => el.id == id);
  let reqobj = reqdata[0];
  
  return (
    <div className="productdetail-container">
      <div className="productdetail-img">
        <img src={reqobj.image}></img>
      </div>
      <div className="productdetail-info">
        <h2>{reqobj.title}</h2>
        <h5>{reqobj.description}</h5>
        <span className="productdetail-price">
          <h5>${reqobj.price}</h5>
        </span>
        <button
          onClick={() => {
            dispatcher(addCreator(id));
            alert("Item added to cart");
          }}
        >
          Add to Cart
        </button>
      </div>
      <button
        onClick={() => {
          history.push("/cart");
        }}
        className="cart-btn"
      >
        <span class="material-icons">shopping_cart</span>
      </button>
    </div>
  );
};
export default ProductDetail;
