import { useState } from 'react';
import '../App.css';
import PortalModal from './PortalModal';

function App() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className='App'>
      <div id='modal-root'></div>
      {showModal && (
        <PortalModal id={'modal-root'}>
          Modal Content
          <button
            style={{ background: 'gray' }}
            onClick={() => setShowModal(false)}
          >
            Close Modal
          </button>
        </PortalModal>
      )}
      <button onClick={() => setShowModal(true)}>Open Modal</button>
    </div>
  );
}

export default App;
