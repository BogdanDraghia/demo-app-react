import style from "./search.module.css";

const Input = ({ name, inputFill }) => {
  return (
    <>
      <input
        placeholder={"Filter Podcasts..."}
        className={style.input}
        value={inputFill ? inputFill.toString() : ""}
      ></input>
    </>
  );
};

export default Input;
