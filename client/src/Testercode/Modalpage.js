import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import {IoIosAddCircleOutline} from   'react-icons/io';
import Testercode from './Testercode';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};



const Modalpage = () => {
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      {/* <button onClick={openModal}>Open Modal</button> */}

      <IoIosAddCircleOutline  aria-label='addbutton' onClick={openModal}/>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
        <div>I am a modal</div>
    <Testercode/>
        <button onClick={closeModal}>close</button>
      </Modal>

      <div>hai </div>
      <div>bye </div>
    </div>
  );
}

export default Modalpage