import React, { Component } from 'react';
import NavBar from '../layout/NavBar';
import axios from 'axios';
import { Grid, TextField, Button as Boton } from '@material-ui/core';
import Button from '../common/Button';

class DireccionForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      ciudad: '',
      calle: '',
      numeroExt: '',
      numeroInt: '',
      colonia: '',
      cp: '',
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:3001/casas/${this.props.match.params.id}`).then(res => {
      this.setState({
        ciudad: res.data.direccion.ciudad,
        calle: res.data.direccion.calle,
        numeroExt: res.data.direccion.numeroExt,
        numeroInt: res.data.direccion.numeroInt,
        colonia: res.data.direccion.colonia,
        cp: res.data.direccion.cp,
      })
    }).catch(err => console.log(err));
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();
    axios.patch(`http://localhost:3001/casas/${this.props.match.params.id}`, {
      direccion:{
        ciudad: this.state.ciudad,
        calle: this.state.calle,
        numeroExt: this.state.numeroExt,
        numeroInt: this.state.numeroInt,
        colonia: this.state.colonia,
        cp: this.state.cp,
      }
    }).then(res => {
      this.props.history.push(`/choose/${this.props.match.params.id}`);
    }).catch(err => console.log(err))
  }

  render() {
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
          <h1 style={{textAlign: 'center'}}>Editar direccion</h1>
        </Grid>
        <Grid container justify="center" item xs={6} direction="row">
          <form onSubmit={this.onSubmit}>
            <Grid item xs={12}>
              <TextField
                id="ciudad"
                label="Ciudad"
                value={this.state.ciudad}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                name="ciudad"
              />
              <TextField
                id="calle"
                label="Calle"
                value={this.state.calle}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                name="calle"
              />
              <TextField
                id="numeroExt"
                label="Numero Exterior"
                value={this.state.numeroExt}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                name="numeroExt"
              />
              <TextField
                id="numeroInt"
                label="Numero interior"
                value={this.state.numeroInt}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                name="numeroInt"
              />
              <TextField
                id="colonia"
                label="Colonia"
                value={this.state.ciudad}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                name="colonia"
              />
              <TextField
                id="cp"
                label="CP"
                value={this.state.cp}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                name="cp"
              />
            </Grid>
            <Grid xs={6} item>
              <Boton type="submit" variant="contained" color="primary">
                Guardar
              </Boton>
            </Grid> 
            <Grid xs={6} item style={{marginTop: "15px"}}>
              <Button color="secondary" url={`/choose/${this.props.match.params.id}`} text="Cancelar" colorText="#FFF" />
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
    )
  }
}

export default DireccionForm;