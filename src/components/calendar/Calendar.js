import React, { Component } from 'react';
import { Calendar, Badge } from 'antd';

class MyCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count
    }
  }
  
  render() {
    // function dateFullCellRender (value) {
    //   console.log(value._d);
    //   return (
    //     <Badge count={5}>
    //       <div className="ant-fullcalendar-date">
    //         <div className="ant-fullcalendar-value">
    //           {value.moment}
    //         </div>
    //         <div className="ant-fullcalendar-content">
    //         </div>
    //       </div>
    //     </Badge>
    //   )      
    // }
    // console.log(value._d);
    return (
      <Calendar fullscreen={false} />
    )
  }
}

export default MyCalendar;