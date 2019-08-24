import React, { Component } from "react";
import { graphql } from "react-apollo";
import { Link } from "react-router";

import query from "../queries/fetchSong";
import LyricCreate from "../components/LyricCreate";
import LyricsList from "../components/LyricsList";

class SongDetail extends Component {
  render() {
    const { song } = this.props.data;

    if (!song) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back</Link>
        <h3> {song.title} </h3>
        {<LyricsList lyrics={song.lyrics} />}
        {<LyricCreate songId={song.id}/>}
      </div>
    );
  }
}

export default graphql(query, {
  options: props => {
    return { variables: { id: props.params.id } };
  }
})(SongDetail);
