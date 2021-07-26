import React from "react";
import GiftImage from "../../api/interfaces/GiftImage";
import GiftGridItem from "../GiftGridItem/GiftGridItem";
import useFetchGifs from "../../hooks/useFetchGifs";
interface MyProps {
  category: string;
}
const defaultProps = {};

const GiftGrid = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const { category } = props;
  const { gifts, loading } = useFetchGifs(category);

  return (
    <div data-testid="GiftGrid" className="container-grid">
      <h1 className="title-category">{category}</h1>
      <p className="text-loading">{loading ? "Cargando...." : ""}</p>
      <div className="card-grid">
        {gifts.map((e: GiftImage) => (
          <GiftGridItem key={e.id} image={e} />
        ))}
      </div>
    </div>
  );
};

GiftGrid.propTypes = {};

export default GiftGrid;
