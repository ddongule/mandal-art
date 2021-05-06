import ReactDOM from 'react-dom';
import { useMemo, useState } from 'react';
import MainTable from './Table/MainTable';
import Table from './Table';
import Header from './Header';
import GlobalStyle from './global.styles';
import Slider from './Slider';

import Modal from './Modal';
import mandalart from '../src/assets/images/mandalart_otani.jpeg';
import Nav from './Components/Nav';
import Description from './Components/Description';

function App() {
  const [mainInput, setMainInput] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
    fifth: '',
    sixth: '',
    seventh: '',
    eighth: '',
    ninth: '',
  });

  const [name, setName] = useState('');

  const [modal, setModal] = useState({
    isModalOpen: false,
    modalContent: '',
  });

  function handleUserName(name) {
    setName(name);
  }

  function addMainInput(name, value) {
    setMainInput({
      ...mainInput,
      [name]: value,
    });
  }

  function toggleModal() {
    setModal((prevState) => ({
      isModalOpen: !prevState.isModalOpen,
      modalContent: prevState.modalContent ? (
        ''
      ) : (
        <img src={mandalart} className='example' alt='mandal-art' />
      ),
    }));
  }

  return (
    <>
      <GlobalStyle />
      <Portal />
      <div className='App' id='capture'>
        {modal.isModalOpen && (
          <Portal>
            <Modal handleModalClose={toggleModal}>{modal.modalContent}</Modal>
          </Portal>
        )}
        <Header handleUserName={handleUserName} />
        <Nav handleModalOpen={toggleModal} name={name} />
        <Description />
        <Slider>
          <div className='tables first-row'>
            <Table
              tableKey='first-table'
              addMainInput={addMainInput}
              centerInput={mainInput.first}
            />
            <Table
              tableKey='second-table'
              addMainInput={addMainInput}
              centerInput={mainInput.second}
            />
            <Table
              tableKey='third-table'
              addMainInput={addMainInput}
              centerInput={mainInput.third}
            />
          </div>
          <div className='tables second-row'>
            <Table
              tableKey='fourth-table'
              addMainInput={addMainInput}
              centerInput={mainInput.fourth}
            />
            <MainTable addMainInput={addMainInput} />
            <Table
              tableKey='sixth-table'
              addMainInput={addMainInput}
              centerInput={mainInput.sixth}
            />
            <div className='shader left'></div>
            <div className='shader right'></div>
          </div>
          <div className='tables third-row'>
            <Table
              tableKey='seventh-table'
              addMainInput={addMainInput}
              centerInput={mainInput.seventh}
            />
            <Table
              tableKey='eighth-table'
              addMainInput={addMainInput}
              centerInput={mainInput.eighth}
            />
            <Table
              tableKey='ninth-table'
              addMainInput={addMainInput}
              centerInput={mainInput.ninth}
            />
          </div>
        </Slider>
      </div>
    </>
  );
}

function Portal({ children }) {
  const modal = useMemo(() => document.getElementById('modal'), []);

  return ReactDOM.createPortal(children, modal);
}

export default App;
