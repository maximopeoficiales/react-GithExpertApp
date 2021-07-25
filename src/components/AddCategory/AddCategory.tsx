import React, { SyntheticEvent, useState } from "react";
import PropTypes from "prop-types";

interface MyProps {
  addCategory(category: string): void;
}
const defaultProps = {
  // optionalText: "Soy un subtitulo opcional",
};

const AddCategory = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  
  const [value, setValue] = useState("Hola bro");
  const handlerChange = (e: any) => {
    setValue(e.target.value);
  };
  const handlerSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    if (value.trim().length > 2) {
      props.addCategory(value);
      setValue("");
    }
  };
  return (
    <div className="">
      <h4>{value}</h4>
      <form onSubmit={handlerSubmit}>
        <input type="text" value={value} onChange={handlerChange} />
      </form>
    </div>
  );
};

AddCategory.propTypes = {
  addCategory: PropTypes.func.isRequired,
};
export default AddCategory;
