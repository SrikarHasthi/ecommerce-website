import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { addCreator } from "../redux/actions";
import "./Product.css";
let Product = (props) => {
  let dispatcher = useDispatch();
  let history = useHistory();
  return (
    <div className="col-4 product-card">
      <div
        onClick={() => {
          history.push(`/productdetail/${props.data.id}`);
        }}
        className="product-img"
      >
        <img src={props.data.image}></img>
      </div>
      <div className="product-card-info">
        {props.data.title.slice(0,25)}...
      </div>
      <div className="product-buy-btn">
        <h5 className="product-price">
          ${props.data.price}
        </h5>
        <button
          onClick={() => {
            dispatcher(addCreator(props.data.id));
            alert("Item added to cart");
          }}
          className="buy-btn"
        >
          Buy
        </button>
      </div>
    </div>
  );
};
export default Product;
