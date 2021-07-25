import React from 'react'
import PropTypes from 'prop-types'

interface MyProps {
  text?: string;
  optionalText?: string;
}
const defaultProps = {
  optionalText: "Soy un subtitulo opcional",
};
const GiftExpertApp = (props : MyProps) => {
  props = { ...defaultProps, ...props };
  
  return (
    <div>
      
      <h1>lkj {props.optionalText}</h1>
    </div>
  )
}



export default GiftExpertApp
