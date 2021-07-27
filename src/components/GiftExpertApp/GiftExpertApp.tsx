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
      <div className="animate__animated animate__bounce">
        <h2 className="title-app">GiftAppReact</h2>
        <AddCategory addCategory={handlerClick} />
      </div>

      <div className="">
        {categorys.map((e) => {
          return <GiftGrid key={e} category={e} />;
        })}
      </div>
    </div>
  );
};

export default GiftExpertApp;
