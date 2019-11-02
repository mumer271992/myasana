/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-useless-constructor */
import React from 'react';

import 'components/Modal/Modal.scss';

class Modal extends React.Component {
  constructor(props) {
    super(props);
  }

  hideModal = (e) => {
    e.stopPropagation();
    const { hideModal } = this.props;
    hideModal();
  }

  render() {
    const { show, children } = this.props;
    return (
      <div className={show ? 'modal show' : 'modal'}>
        <div className="modal-overlay" name="overlay" onClick={this.hideModal} />
        <div className="modal-content-container">
          {
            children
          }
        </div>
      </div>
    );
  }
};

export default Modal;
