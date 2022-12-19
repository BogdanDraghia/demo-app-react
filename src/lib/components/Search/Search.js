import Input from "./Input";
import style from "./search.module.css";

const Search = (props) => {
  return (
    <div className={style.SearchContainer}>
      <div className={style.Counter}>{"100"}</div>
      <Input />
    </div>
  );
};

export default Search;
