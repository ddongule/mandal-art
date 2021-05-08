import ReactDOM from 'react-dom';
import { useMemo, useState } from 'react';
import Description from './Components/Description';
import Header from './Header';
import Nav from './Components/Nav';
import Modal from './Modal';
import Table from './Table';
import MainTable from './Table/MainTable';
import Slider from './Slider';

import GlobalStyle from './global.styles';
import mandalart from '../src/assets/images/mandalart_otani.jpeg';

function Portal({ children }) {
  const modal = useMemo(() => document.getElementById('modal'), []);

  return ReactDOM.createPortal(children, modal);
}

function App() {
  const [mainInput, setMainInput] = useState([...new Array(9)].fill(''));
  const [name, setName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  function handleUserName(name) {
    setName(name);
  }

  function addMainInput(index, value) {
    setMainInput((prevState) => {
      const newState = [...prevState];
      newState.splice(index, 1, value);
      return newState;
    });
  }

  return (
    <>
      <GlobalStyle />
      <Portal />

      <Portal>
        <Modal isOpen={isModalOpen} onClickModal={closeModal} onPressEsc={closeModal}>
          <img src={mandalart} className='example' alt='mandal-art' />
        </Modal>
      </Portal>
      <Description />
      <div className='App' id='capture'>
        <Header handleUserName={handleUserName} />
        <Nav onClickExample={openModal} name={name} />
        <Slider>
          <div className='tables first-row'>
            <Table tableKey='first-table' addMainInput={addMainInput} centerInput={mainInput[0]} />
            <Table tableKey='second-table' addMainInput={addMainInput} centerInput={mainInput[1]} />
            <Table tableKey='third-table' addMainInput={addMainInput} centerInput={mainInput[2]} />
          </div>
          <div className='tables second-row'>
            <Table tableKey='fourth-table' addMainInput={addMainInput} centerInput={mainInput[3]} />
            <MainTable addMainInput={addMainInput} />
            <Table tableKey='sixth-table' addMainInput={addMainInput} centerInput={mainInput[4]} />
            <div className='shader left'></div>
            <div className='shader right'></div>
          </div>
          <div className='tables third-row'>
            <Table
              tableKey='seventh-table'
              addMainInput={addMainInput}
              centerInput={mainInput[5]}
            />
            <Table tableKey='eighth-table' addMainInput={addMainInput} centerInput={mainInput[6]} />
            <Table tableKey='ninth-table' addMainInput={addMainInput} centerInput={mainInput[7]} />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default App;
