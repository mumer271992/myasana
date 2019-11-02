import React from 'react';

import 'components/Modal/modal.scss';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  hideModal = (e) => {
    e.stopPropagation();
    this.props.hideModal();
  }

  render() {
    return (
      <div className={ this.props.show ? 'modal show' : 'modal'}>
        <div className="modal-overlay" name="overlay" onClick={this.hideModal} />
        <div className="modal-content-container">
          {
            this.props.children
          }
        </div>
      </div>
    );
  }
};

export default Modal;
