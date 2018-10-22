import React, { Component } from 'react';
import { Calendar } from 'antd';

function onPanelChange(value, mode) {
  console.log(value, mode);
}

class myCalendar extends Component {
  render() {
    return (
      <Calendar fullscreen={false} onPanelChange={onPanelChange} />
    )
  }
}

export default myCalendar;