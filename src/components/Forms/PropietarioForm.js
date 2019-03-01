import React, { Component } from 'react';
import NavBar from '../layout/NavBar';
import axios from 'axios';
import { Grid, TextField, Button as Boton } from '@material-ui/core';
import Button from '../common/Button';

class PropietarioForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      nombre: '',
      email: '',
      tel: '',
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:3001/casas/${this.props.match.params.id}`).then(res => {
      this.setState({
        nombre: res.data.propietario.nombre,
        tel: res.data.propietario.tel,
        email: res.data.propietario.email,
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
      propietario:{
        nombre: this.state.nombre,
        tel: this.state.tel,
        email: this.state.email,
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
          <h1 style={{textAlign: 'center'}}>Editar propietario</h1>
        </Grid>
        <Grid container justify="center" item xs={6} direction="row">
          <form onSubmit={this.onSubmit}>
            <Grid item xs={12}>
              <TextField
                id="nombre"
                label="Nombre"
                value={this.state.nombre}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                name="nombre"
              />
              <TextField
                id="tel"
                label="Teléfono"
                value={this.state.tel}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                name="tel"
              />
              <TextField
                id="email"
                label="Email"
                value={this.state.email}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
                name="email"
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

export default PropietarioForm;