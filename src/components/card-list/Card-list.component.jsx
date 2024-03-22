import React, { Component } from "react";
import "./card-list-styles.css";
import Card from "../Card/Card";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    console.log(this.render);

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return (
            <div>
              <Card monster={monster} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
