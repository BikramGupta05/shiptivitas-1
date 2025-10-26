import React from 'react';
import './Card.css';

export default class Card extends React.Component {
  render() {
    let className = ['Card'];

    // Apply background color class based on card status 
    if (this.props.status === 'backlog') {
      className.push('Card-grey'); // grey for backlog
    } else if (this.props.status === 'in-progress') {
      className.push('Card-blue'); // blue for in-progress
    } else if (this.props.status === 'complete') {
      className.push('Card-green'); // green for complete
    }

    return (
      // Added data-id and data-status for Dragula to identify card
      <div 
        className={className.join(' ')} 
        data-id={this.props.id} 
        data-status={this.props.status}
      >
        <div className="Card-title">{this.props.name}</div>
      </div>
    );
  }
}
