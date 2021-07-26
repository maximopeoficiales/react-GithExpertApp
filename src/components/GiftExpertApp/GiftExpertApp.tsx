import React, { useState } from "react";
import AddCategory from "../AddCategory/AddCategory";
import GiftGrid from "../GiftGrid/GiftGrid";

interface MyProps {}
const defaultProps = {};
const GiftExpertApp = (props: MyProps) => {
  props = { ...defaultProps, ...props };

  const [categorys, setCategorys] = useState(["rick and morty"]);
  const handlerClick = (category: string) => {
    setCategorys([category, ...categorys]);
  };
  return (
    <div>
      <h2>GiftAppReact</h2>
      <AddCategory addCategory={handlerClick} />
      <ol>
        {categorys.map((e) => {
          return <GiftGrid key={e} category={e} />;
        })}
      </ol>
    </div>
  );
};

export default GiftExpertApp;
