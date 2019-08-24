import React, {Component} from 'react';
import gql from "graphql-tag";
import { graphql } from "react-apollo";


class LyricCreate extends Component {

    constructor(props) {
        super(props)

        this.state={
            content: ''
        }
    }

    onSubmit(e){
        e.preventDefault();
        this.props.mutate({
            variables:{
                songId: this.props.songId,
                content: this.state.content
            }
            }).then(() => { this.setState({content: ''}) })
              .catch(() => {}); 
    }

    render() {
       return ( <form onSubmit={(e) => this.onSubmit(e)}>
            <label>Add Lyric:</label>
            <input onChange={(e) => this.setState({content: e.target.value})} value={this.state.content}  />
            <button type="submit" className="btn-floating btn-large green right"> <i className="material-icons">save</i> </button>
       </form> );
    }


}

const mutation = gql`
 mutation AddLyricToSong($songId: ID, $content: String){
    addLyricToSong(songId: $songId, content:$content){
      id
      title
      lyrics{
          id
        content
      }
    }
  }
  
`;

export default graphql(mutation)(LyricCreate);