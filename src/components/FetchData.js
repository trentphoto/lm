import React from 'react'
import { connect } from 'react-redux'
import { getEpisodes } from '../actions'

class FetchData extends React.Component {
  componentWillMount() {
    this.props.getEpisodes()
  }
  render(){
    return null;
  }
}

export default connect(null, { getEpisodes })(FetchData)
