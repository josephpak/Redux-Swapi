import React from "react";
import { connect } from "react-redux";
// import Loader from "react-loader-spinner";

import { CharacterList } from "../components";
// import actions
import { getCharacters } from "../actions"

class CharacterListView extends React.Component {

  componentDidMount() {
    // call our action
    this.props.getCharacters()
    console.log(this.props)
  }

  render() {
    if (this.props.fetching) {
      <p>This is Loading</p>
      // return <Loader type="Ball-Triangle" color="blue" height="90" width="60" />
    }
    console.log(this.props.characters)
      return (
        <div className="CharactersList_wrapper">
          <CharacterList characters={this.props.characters} />
        </div>

      );

  }
}

const mapStateToProps = state => {
  return {
    // Read up on this -- when there are combinedReducers beware
    fetching: state.charsReducer.fetching,
    characters: state.charsReducer.characters,
    error: state.charsReducer.error
  }
};

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
export default connect(
  mapStateToProps,
  { getCharacters }
)(CharacterListView);
