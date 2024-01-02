import { createContext, useState, useCallback } from 'react';

import { Backdrop } from '../utils/Loader/Loader.styled';
import { PropTypes } from 'prop-types';

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState(null);

  const toggleModal = useCallback((modal = null) => setModal(modal), []);

  return (
    <ModalContext.Provider value={toggleModal}>
      {modal && <Backdrop>{modal}</Backdrop>}
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

ModalProvider.propTypes = {
  children: PropTypes.object,
};
