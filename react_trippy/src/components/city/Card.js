import React from "react";

class Card extends React.Component {
  render() {

    // console.log(' dans render de card', this.props);
    return (
      <div className="card col-3" style={{ width: 250 }}>
        <img
          className="card-img-top"
          src={`http://via.placeholder.com/300x200`}
          alt="..."
        ></img>
        <div className="card-body">
          <h5 className="card-title" >{this.props.name}</h5>
          <p className="card-text" > {this.props.slug} </p>
        </div>
        <p></p>
      </div>
    );
  }
}
export default Card;
