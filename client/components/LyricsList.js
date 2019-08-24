import React, { Component } from "react";

class LyricsList extends Component {
  renderLyricList() {
    return this.props.lyrics.map(({ content, id }) => {
      return (
        <li className="collection-item" key={id}>
          {content}
        </li>
      );
    });
  }

  render() {
    return <ul className="collection">{this.renderLyricList()}</ul>;
  }
}

export default LyricsList;
