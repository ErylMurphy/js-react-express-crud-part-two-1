import React, { Component } from "react";
import Building from '../Building';
import "./style.css";

class HomePage extends Component {
  constructor(props){
    super(props);
    this.state = {
      buildings: []
    };
  }

  componentDidMount() {
    fetch('/buildings.json')
      .then(response => response.json())
      .then(buildings => {
        this.setState({
          buildings: buildings
        });
      });
  }

  render() {
    return (
      <div className="HomePage">
        {this.state.buildings.map(building => {
          return <Building
          image={building.image}
          name={building.name}
          style={building.style}
          city={building.city}
          architect={building.architect}
        />
        })}
      </div>
    );
  }
}

export default HomePage;
