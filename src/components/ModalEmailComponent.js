import React, { Component } from 'react';
import { Button, Header, Image, Modal } from 'semantic-ui-react';
import projectOne from '../assets/img/project-one.jpg';
import EmailFormComponent from './EmailFormComponent';

class ModalEmailComponent extends Component {
  state = { open: false }

  show = size => () => this.setState({ size, open: true })
  close = () => this.setState({ open: false })
  
  render() {
    const { open, size } = this.state
    return (
        <div>
          <a onClick={this.show('small')} className="modal-a"><i className="mail icon"></i></a>

          <Modal size={size} open={open} onClose={this.close}>
            <Modal.Header>
              Modal Header
            </Modal.Header>
            <Modal.Content>
              <p>Are you sure you want to delete your account</p>
              <EmailFormComponent />
            </Modal.Content>
            <Modal.Actions>
              <Button negative>
                ESCAPE TO CLOSE
              </Button>
            </Modal.Actions>
          </Modal>
        </div>
    );
  }
}

export default ModalEmailComponent;
