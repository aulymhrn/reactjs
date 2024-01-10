import React, { Component } from 'react'
import Operan from './Operan';

export default class StateProps extends Component {
    constructor(props) {
        super(props);
        this.state = {
            makanan : "Bakso",
            minuman : "Es teh",
        };
    }

    gantimakanan = (makanan_baru) => {
        this.seState({makanan: makanan_baru });
    };

  render() {
    return (
        <>
      <div>{this.state.makanan}</div>
      <button onClick={() => this.setState({ makanan: "Soto" })}
      >Ganti makanan</button>
      <Operan makanan = {this.state.makanan}/>

      <div>{this.state.minuman}</div>
      
      <button onClick={() => this.setState({ minuman: "Es jeruk" })}
      >Ganti minuman</button>
      <Operan minuman = {this.state.minuman}/>
      </>
    )
  }
}
