import React from "react";
import GiftImage from "../../api/interfaces/GiftImage";
interface MyProps {
  image: GiftImage;
}
const defaultProps = {};
const GiftGridItem = (props: MyProps) => {
  props = { ...defaultProps, ...props };
  const { image } = props;

  return (
    <div data-testid="GiftGridItem">
      <h1>{image.title}</h1>
      <img src={image.imgUrl} alt="" />
    </div>
  );
};

GiftGridItem.propTypes = {};

export default GiftGridItem;
