import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

class SongList extends Component {
  renderSong() {
    return this.props.data.songs.map((song, i) => {
      return <li key={i}>{song.title}</li>;
    });
  }

  render() {
    if (this.props.data.loading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        song list
        {this.renderSong()}
      </div>
    );
  }
}

const query = gql`
  {
    songs {
      title
    }
  }
`;

export default graphql(query)(SongList);
