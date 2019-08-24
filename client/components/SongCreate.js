import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

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
        }
        }) 
  }

  render() {
    return (
      <div>
        <h3>Create Song</h3>
        <form onSubmit={(e) => this.onSubmit(e)}>
          <label>Song Title:</label>
          <input
            onChange={e => {
              this.setState({ title: e.target.value });
            }}
            value={this.state.title}
          />
          <button type="submit"> save </button>
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
