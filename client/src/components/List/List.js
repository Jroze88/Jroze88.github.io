import React, { Component } from "react";


class List extends Component {
 

    render() {
      return(
    <div className="list-overflow-container">
      <ul className="list-group">
        {this.props.children}
      </ul>
    </div>
      )
}
}

export default List
