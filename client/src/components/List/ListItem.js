import React, { Component } from "react";

class ListItem extends Component {

  render() {

    return(
  <li  className="list-group-item">
    {this.props.children}
  </li>
    )
}
};

export default ListItem
