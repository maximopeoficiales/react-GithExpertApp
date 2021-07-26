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
    <div data-testid="GiftGrid">
      <h1>{category}</h1>
      <p>{loading ? "Cargando" : "Data Cargada"}</p>
      <ol>
        {gifts.map((e: GiftImage) => (
          <GiftGridItem key={e.id} image={e} />
        ))}
      </ol>
    </div>
  );
};

GiftGrid.propTypes = {};

export default GiftGrid;
