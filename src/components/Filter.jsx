import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {filterCreater, paginationCreater} from "../redux/actions";
let Filter=()=>{
    let data=useSelector(state=>state.data);
    let productType=[...new Set(data.map(e=>e.category))];
    let dispatch=useDispatch();
    let type=useSelector(state=>state.filter);
return (
  <>
    <ul className="list-group" style={{ cursor: "pointer" }}>
      <li
        onClick={() => {
          dispatch(filterCreater("All Items"));
        }}
        className={`list-group-item ${type === "All Items" ? "active" : ""}`}
        aria-current="true"
      >
        ALL ITEMS
      </li>
      {productType.map((e) => {
        return (
          <li
            onClick={() => {
              dispatch(filterCreater(e));
              dispatch(paginationCreater({ currPage: 1 }));
            }}
            key={e}
            className={`list-group-item ${type === e ? "active" : ""}`}
          >
            {e.toUpperCase()}
          </li>
        );
      })}
    </ul>
  </>
);
}
export default Filter;