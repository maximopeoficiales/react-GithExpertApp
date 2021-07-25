import React, { useState } from "react";
import AddCategory from "../AddCategory/AddCategory";

interface MyProps {
  text?: string;
  optionalText?: string;
}
const defaultProps = {
  optionalText: "Soy un subtitulo opcional",
};
const GiftExpertApp = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const [categorys, setCategorys] = useState(["maximo", "hoal", "jlkj"]);
  const handlerClick = (category: string) => {
    setCategorys([...categorys, category]);
  };
  return (
    <div>
      <h2>GiftAppReact</h2>
      <AddCategory addCategory={handlerClick} />
      <ol>
        {categorys.map((e) => {
          return <li key={e}>{e}</li>;
        })}
      </ol>
    </div>
  );
};

export default GiftExpertApp;
