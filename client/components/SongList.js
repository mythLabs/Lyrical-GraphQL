import '../style/style.css'

import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link } from "react-router";

import query from '../queries/fetchSongs';

class SongList extends Component {
  onSongDelete(id) {

    this.props.mutate({
      variables:{
          id: id
      }
      }).then(() => this.props.data.refetch())
        .catch(() => {}); 
  }


  renderSong() {
    return this.props.data.songs.map(({title,id}, i) => {
      return (
        <li className="collection-item" key={i}>
          {title}
          <i className="material-icons" onClick={(e) => this.onSongDelete(id)}>delete</i>
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

const mutation = gql`
  mutation DeleteSong($id: ID){
    deleteSong(id: $id){
      id
    }
  }
`;

export default graphql(mutation) (
        graphql(query)(SongList)
      );
    
