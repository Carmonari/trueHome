import React from 'react';
import NavBar from '../layout/NavBar';
import { Grid } from '@material-ui/core';
import Button from '../common/Button';

const ChooseForm = (props) => {
  return (
    <div>
      <NavBar />
      <Grid
        container
        spacing={24}
        direction="row"
        justify="center"
        alignItems="flex-start"
      >
        <Grid item xs={12}>
          <h1 style={{textAlign: 'center'}}>Editar propiedad</h1>
        </Grid>
        <Grid container justify="space-between" item xs={6}>
          <Button url={`/precio-form/${props.match.params.id}`} text="Editar precio" />
          <Button url={`/direccion-form/${props.match.params.id}`} text="Editar dirección" />
          <Button url={`/propietario-form/${props.match.params.id}`} text="Editar propietario" />
        </Grid>
        <Grid item xs={12}>
          <Button color="secondary" url={`/`} text="Regresar" colorText="#FFF" align="center" />
        </Grid>
      </Grid>
    </div>
  )
}

export default ChooseForm;
