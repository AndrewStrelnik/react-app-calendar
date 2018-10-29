import React, { PureComponent } from 'react';
import { Modal } from 'antd';

class EditModal extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.count
    }
  }
  
  render() {
    return (
      <Modal
          title={this.props.title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
    )
  }
}

export default EditModal;