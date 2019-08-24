import React,{Component} from 'react';
import { graphql } from "react-apollo";
import { Link } from "react-router";

import query from '../queries/fetchSong';

class SongDetail extends Component{

    render() {

        const {song} = this.props.data;

        if (!song) {
            return <div>Loading...</div>;
          }

        return(<div>
            <Link to="/">Back</Link>
            <h3> Song Detail </h3>
            <p> {this.props.data.song.title}  </p>

        </div>)
    }

}

export default graphql(query, {
    options: (props) => {return {variables: {id : props.params.id}}}
})(SongDetail);