
import React, {Component} from 'react';

class Popup extends React.Component {
  constructor() {
      super();

   };

 
  render() {
    return (
     <div>
        <button onClick={() => this.openModal()}>Open modal</button>
        <Modal isOpen={this.state.isModalOpen} onClose={() => this.closeModal()}>
          <h1>Modal title</h1>
          <p>hello</p>
          <p><button onClick={() => this.closeModal()}>Close</button></p>
        </Modal>
      </div>
    );
  }
}


export default Popup;