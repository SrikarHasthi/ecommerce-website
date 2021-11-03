import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { paginationCreater } from "../redux/actions";

let Pagination = () => {
    let {numberOfPages,currPage}=useSelector(state=>state.pagination);
    let dispatch=useDispatch();
  let pagesarray = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pagesarray.push(i);
  }
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pagesarray.map((el) => {
          return (
            <li
              onClick={() => {
                dispatch(paginationCreater({currPage:el}));
              }}
              key={el}
              className={`page-item ${el === currPage ? "active" : ""}`}
            >
              <a href="/#" className="page-link">{el}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
