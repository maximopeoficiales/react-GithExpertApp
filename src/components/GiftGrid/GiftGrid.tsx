import React from "react";
import PropTypes from "prop-types";
interface MyProps {}
const defaultProps = {};
const GiftGrid = (props: MyProps) => {
  props = { ...defaultProps, ...props };

  return (
    <div data-testid="GiftGrid">
      <h1>GiftGrid component</h1>
    </div>
  );
};

GiftGrid.propTypes = {};

export default GiftGrid;
