import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { Link, hashHistory } from "react-router";

import query from '../queries/fetchSongs';

class SongCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ""
    };
  }

  onSubmit(e) {
      e.preventDefault();
    this.props.mutate({
        variables:{
            title: this.state.title
        },
        refetchQueries:[{ query }]
        }).then(() => { hashHistory.push("/") })
          .catch(() => {}); 
  }

  render() {
    return (
      <div>
          <Link to="/">Back</Link>
        <h3>Create Song</h3>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <label>Song Title:</label>
          <input
            onChange={e => {
              this.setState({ title: e.target.value });
            }}
            value={this.state.title}
          />
          <button type="submit" className="btn-floating btn-large green right"> <i className="material-icons">save</i> </button>
        </form>
      </div>
    );
  }
}

const mutation = gql`
mutation addSong($title: String) {
    addSong(title: $title){
      title
    }
  }
  
`;

export default graphql(mutation)(SongCreate);
