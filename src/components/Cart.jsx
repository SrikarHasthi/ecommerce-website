import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { removeCreator } from "../redux/actions";
import "./Cart.css"
let Cart = () => {
  let dispatcher = useDispatch();
  let data = useSelector((state) => state.data);
  let filtereddata = data.filter((el) => el.qty > 0);
  let total = 0,
    amount = 0;
  return (
    <div className="row">
      <div className="col-sm-12">
        <div className="cart-container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col"></th>
                <th scope="col" className="table-name">
                  Name
                </th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Amount</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {filtereddata.map((el, index) => {
                amount = el.price * el.qty;
                total += amount;
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td className="table-image">
                      <img alt="" src={el.image}></img>
                    </td>
                    <td className="table-name">{el.title}</td>
                    <td>${el.price}</td>
                    <td>{el.qty}</td>
                    <td>${(el.price * el.qty).toFixed(2)}</td>
                    <td>
                      <span
                        onClick={() => {
                          dispatcher(removeCreator(el.id));
                        }}
                        className="material-icons-outlined delete"
                      >
                        delete
                      </span>
                    </td>
                  </tr>
                );
              })}
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>Total</td>
                <td>${total}</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default Cart;
