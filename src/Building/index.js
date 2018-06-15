import React, { Component } from "react";
import "./style.css";

// INSERT INTO buildings VALUES (DEFAULT, 'Sagrada Familia', 2028, 'Barcelona', 'Antoni Gaudi', 'Art Nouveau', 'https://laninga.files.wordpress.com/2016/05/dscf4303.jpg');

class Building extends Component {
  render() {
    return (

        <div className="building">
          <div className="image-wrapper">
            <img src={this.props.image} />
          </div>
          <div className="building-details">
            <h3>{this.props.name}</h3>
            <p>Style: {this.props.style}</p>
            <p>City: {this.props.city}</p>
            <p>Architect: {this.props.architect}</p>
          </div>
        </div>

    );
  }
}

export default Building;
