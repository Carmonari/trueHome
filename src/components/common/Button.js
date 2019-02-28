import React from 'react';
import { Button as Boton } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Button = ({ color = "default", url, text, colorText = "#000", align = "initial"}) => {
  return (
    <div style={{textAlign: `${align}`}}>
      <Boton variant="contained" color={color}>
        <Link style={{color: `${colorText}`, textDecoration: 'none'}} to={`${url}`}>{text}</Link>
      </Boton>
    </div>
  )
}

export default Button;
