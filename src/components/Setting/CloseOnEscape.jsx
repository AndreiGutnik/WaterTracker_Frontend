// import { useEffect, useCallback, useEscapeKey } from "react";


// const CloseModal = () => {
//   const KEY_NAME_ESC = 'Escape';
//   const KEY_EVENT_TYPE = 'keyup';
 
//   useEscapeKey((handleClose) => {
//     const handleEscKey = useCallback((event) => {
//       if (event.key === KEY_NAME_ESC) {
//         handleClose();
//       }
//     }, [handleClose]);
 
//     useEffect(() => {
//       document.addEventListener(KEY_EVENT_TYPE, handleEscKey, false);
 
//       return () => {
//         document.removeEventListener(KEY_EVENT_TYPE, handleEscKey, false);
//       };
//     }, [handleEscKey]);
//   }
//   )
// }

// export default CloseModal

import { Component } from 'react';
import PropTypes from 'prop-types';
// import CloseOnEscape from 'react-close-on-escape';


export default class CloseOnEscape extends Component {
  constructor() {
    super();
    this.onEscape = this.onEscape.bind(this);
  }

  onEscape({ keyCode }) {
    if (keyCode === 27) {
      this.props.onEscape();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onEscape);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscape);
  }

  render() {
    return this.props.children;
  }
}

CloseOnEscape.propTypes = {
  onEscape: PropTypes.func.isRequired
};
