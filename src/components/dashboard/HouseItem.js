import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import NumberFormat from 'react-number-format';

const HouseItem = ({ photo, precio, direccion, propietario, handleClick }) => {
  return (
    <Paper onClick={handleClick} style={{marginTop:  '25px', cursor: 'pointer'}} elevation={1}>
      <Grid container spacing={24} direction="row" justify="flex-start" alignItems="flex-start">
        <Grid item xs={4} style={{paddingLeft: '25px'}}>
          <img style={{width: '100%'}} src={photo} alt="casa" />
          <p>Precio <NumberFormat value={precio} displayType={'text'} thousandSeparator={true} prefix={'$'} /></p>
        </Grid>
        <Grid item xs={4}>
          <h3 style={{margin: '0'}}>Direccion</h3>
          <p>Ciudad: {direccion.ciudad}</p>
          <p>Colonia: {direccion.colonia}</p>
          <p>Calle: {direccion.calle}</p>
          <p>Numero Ext: {direccion.numeroExt}</p>
          {
            direccion.numeroInt === '' 
            ? '' : <p>Numero Interior: {direccion.numeroInt}</p>
          }
          <p>CP: {direccion.cp}</p>
        </Grid>
        <Grid item xs={4}>
          <h3 style={{margin: '0'}}>Datos del propietario</h3>
          <p>Nombre: {propietario.nombre}</p>
          <p>Tel: {propietario.tel}</p>
          <p>Email: {propietario.email}</p>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default HouseItem;
