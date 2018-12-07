import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class GiveBtn extends React.Component {
  render() {
    return (
      <a className="GiveBtn" href="https://patreon.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon="gift" />
        <span>Support Us</span>
      </a>
    );
  }
}
