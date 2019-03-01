import React, { Component } from 'react'
import NavBar from '../layout/NavBar';
import axios from 'axios';
import { Grid, TextField, Button as Boton } from '@material-ui/core';
import Button from '../common/Button';


class PrecioForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      precio: ''
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:3001/casas/${this.props.match.params.id}`).then(res => {
      this.setState({
        precio: res.data.precio
      })
    }).catch(err => console.log(err));
  }

  handleChange = e => {
    this.setState({
      precio: e.target.value
    })
  }

  onSubmit = e => {
    e.preventDefault();
    axios.patch(`http://localhost:3001/casas/${this.props.match.params.id}`, {
      precio: this.state.precio
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
          <h1 style={{textAlign: 'center'}}>Editar precio</h1>
        </Grid>
        <Grid container justify="center" item xs={6} direction="row">
          <form onSubmit={this.onSubmit}>
            <Grid item xs={12}>
              <TextField
                id="precio"
                label="Precio"
                value={this.state.precio}
                onChange={this.handleChange}
                margin="normal"
                variant="outlined"
              />
            </Grid>
            <Grid xs={6} item>
              <Boton type="submit" variant="contained" color="primary">
                Guardar
              </Boton>
            </Grid> 
            <Grid xs={6} item style={{marginTop: "15px"}}>
              <Button color="secondary" url={`/choose/${this.props.match.params.id}`} text="Cancelar" colorText="#FFF" align="center" />
            </Grid>
          </form>
        </Grid>
      </Grid>
      </div>
    )
  }
}

export default PrecioForm;
