import React from "react";
import PropTypes from "prop-types";
interface MyProps {}
const defaultProps = {};
const TemplateName = (props: MyProps) => {
  props = { ...defaultProps, ...props };

  return (
    <div  data-testid="TemplateName">
    <h1>TemplateName component</h1>
    </div>
  );
};

TemplateName.propTypes = {};

export default TemplateName;
