import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";

import query from '../queries/fetchSongs';

class SongList extends Component {
  renderSong() {
    return this.props.data.songs.map((song, i) => {
      return (
        <li className="collection-item" key={i}>
          {song.title}
        </li>
      );
    });
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        Songs List
        <ul className="collection">{this.renderSong()}</ul>
        <Link to="/songs/new" className="btn-floating btn-large red right">
          <i className="material-icons">add</i>
        </Link>
      </div>
    );
  }
}

export default graphql(query)(SongList);
