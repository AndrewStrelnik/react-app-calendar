import React, { Component } from 'react';
import { Calendar } from 'antd';
// import moment from 'moment';

class MyCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count
    }
  }
  
  render() {
    return (
      <Calendar fullscreen={false} onSelect={this.props.onSelectHandle}/>
    )
  }
}

export default MyCalendar;