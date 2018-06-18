import React, { Component } from "react";
import "./style.css";
import Building from '../Building';

class BuildingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id : 0,
      image : "",
      name : "",
      style : "",
      city : "",
      architect : "",
    }
  }
  componentDidMount() {
    console.log("mounted")
    let id = this.props.match.params.id;
    fetch(`/buildings/${id}.json`)
      .then(response => response.json())
      .then(building => {
        this.setState({
          id: building.id,
          image: building.image,
          name: building.name,
          style: building.style,
          city: building.city,
          architect: building.architect
        });
      });
  }

  render() {
    return (
      <div className="building-show">
      <Building
          id={this.state.id}
          image={this.state.image}
          name={this.state.name}
          style={this.state.style}
          city={this.state.city}
          architect={this.state.architect} />
      </div>
    );
  }
}

export default BuildingPage;
