import React, { Component } from "react";
import "./card.css";

class Card extends Component {
  render() {
    const { id, name, email } = this.props.monster;
    return (
      <div className="card-container" key={id}>
        <img
          src={`https://robohash.org/${id}?set=set2`}
          alt={`monster ${name}`}
        />
        <h2 className="card-h2">{name}</h2>
        <p className="card-p">{email}</p>
      </div>
    );
  }
}

export default Card;
