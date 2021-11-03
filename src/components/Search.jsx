import "./Search.css"
import { useDispatch } from "react-redux";
import { searchCreater,paginationCreater } from "../redux/actions";
let Search = () => {
  let dispatch=useDispatch();
  return (
    <div className="row mb-4">
      <div className="col-xl-5 col-lg-5 col-md-6 col-sm-12">
        <div className="container">
          <div className="row d-flex justify-content-center search-outer">
            <div className="d-flex justify-content-center search-inner">
              <div className="search">
                {" "}
                <input
                  onChange={(el) => {
                    dispatch(searchCreater(el.currentTarget.value))
                     dispatch(paginationCreater({ currPage: 1 }));
                  }}
                  type="text"
                  className="search-input"
                  placeholder="Search..."
                  name=""
                />{" "}
                <a href="/#" className="search-icon">
                  <span className="material-icons-outlined"> search </span>
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
