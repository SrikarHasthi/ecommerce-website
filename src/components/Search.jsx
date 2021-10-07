import "./Search.css"
import { useDispatch } from "react-redux";
import { searchCreater,paginationCreater } from "../redux/actions";
let Search = () => {
  let dispatch=useDispatch();
  return (
    <div className="row mb-4">
      <div className="col-5">
        <div class="container">
          <div class="row d-flex justify-content-center search-outer">
            <div class="d-flex justify-content-center search-inner">
              <div class="search">
                {" "}
                <input
                  onChange={(el) => {
                    dispatch(searchCreater(el.currentTarget.value))
                     dispatch(paginationCreater({ currPage: 1 }));
                  }}
                  type="text"
                  class="search-input"
                  placeholder="Search..."
                  name=""
                />{" "}
                <a href="#" class="search-icon">
                  <span class="material-icons-outlined"> search </span>
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
