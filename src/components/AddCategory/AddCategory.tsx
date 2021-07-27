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

  const [value, setValue] = useState("");
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
    <div className="container-input">
      {/* <p>Search:</p> */}
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          value={value}
          className="input-query"
          onChange={handlerChange}
          placeholder="Search"
        />
      </form>
    </div>
  );
};

AddCategory.propTypes = {
  addCategory: PropTypes.func.isRequired,
};
export default AddCategory;
