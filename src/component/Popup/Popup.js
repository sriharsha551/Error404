import React from 'react';
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';

class SelectPopUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>select</Button>
        <Modal isOpen={this.state.modal}  >
          <ModalHeader toggle={this.toggle}>Select One</ModalHeader>
          <ModalBody>
            <Button color="primary" onClick={this.toggle}>Single Mode</Button>
            <Button color="secondary" onClick={this.toggle}>Batch Mode</Button>          
        </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default SelectPopUp;