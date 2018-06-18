import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./style.css";

class CreateBuilding extends Component {

  constructor(props) {
    super(props)
    this.state = {
      image: "",
      name: "",
      city: "",
      style: "",
      architect: "",
      created: false
    }
    this.onFormChange = this.onFormChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onFormChange(evt) {
    const element = evt.target;
    const name = element.name; //"title"
    const value = element.value; //"g"
    const newState = {};
    newState[name] = value;
    this.setState(newState);
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    const newBuilding = {
      name: this.state.name,
      city: this.state.city,
      image: this.state.image,
    }
    fetch('/buildings', {
      method: "POST",
      body: JSON.stringify(newBuilding),
      headers: {
        "Content-type": "application/json"
      }
    }).then(response => response.json())
      .then(building => {
        this.setState({
          created: true
        });
      });
  }

  render() {
    //
    if (this.state.created === true) {
      return <Redirect to="/" />;
    }
    return (
      <div className="CreateBuilding">
        <h1>Create New Building</h1>
        <form onChange={this.onFormChange} onSubmit={this.onFormSubmit}>
          <p>
            <label for="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
            />
          </p>
          <p>
            <label for="description">City</label>
            <input
              type="text"
              name="city"
              placeholder="city"
              value={this.state.city}
            />
          </p>
          <p>
            <label for="image">Image Url</label>
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              value={this.state.image}
            />
          </p>
          <p>
            <input type="submit" value="Submit" />
          </p>
        </form>
      </div>
    );
  }
}

export default CreateBuilding;
