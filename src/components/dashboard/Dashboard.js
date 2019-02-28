import React, { Component } from 'react';
import NavBar from '../layout/NavBar';
import { Grid } from '@material-ui/core';
import HouseItem from './HouseItem';

class Dashboard extends Component {
  constructor(props){
    super(props);
    this.state = {
      house: []
    }
  }

  handleClick = (id) => e => {
    this.props.history.push(`/choose/${id}`);
  }

  componentDidMount(){
    let url = "http://localhost:3001/casas";
    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        let house = data.map((house) => {
          return (
            <HouseItem key={house.id} {...house} handleClick={this.handleClick(house.id)} />
          )
        })
        this.setState({
          house
        })
      })
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
            <h1 style={{textAlign: 'center'}}>Casas</h1>
          </Grid>
          <Grid item xs={6}>
            {this.state.house}
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default Dashboard;
