import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { optimistic } from "apollo-client/optimistic-data/store";

class LyricsList extends Component {

 
    onLike(lyricId, likes) {
        this.props.mutate({
            variables:{
                id: lyricId,
            },
            optimisticResponse: {
              likeLyric: {
                 id: lyricId,
                 __typename: 'LyricType',
                 likes: likes + 1
              }
            }
            })
    }

  renderLyricList() {
    return this.props.lyrics.map(({ content, id, likes }) => {
      return (
        <li className="collection-item" key={id}>
          {content}
          <div className="vote-box">
          <i className="material-icons" onClick={() => {this.onLike(id,likes)}}>thumb_up</i>{likes}
          </div>
        </li>
      );
    });
  }

  render() {
    return <ul className="collection">{this.renderLyricList()}</ul>;
  }
}

const mutation = gql`
    mutation LikeLyrics($id: ID){
        likeLyric(id: $id){
        id
        likes
        }
    }

`;

export default graphql(mutation)(LyricsList);
