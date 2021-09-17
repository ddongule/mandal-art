import Description from './Components/Description';
import Footer from './Components/Footer';
import GlobalStyle from './global.styles';
import Header from './Components/Header';
import MainTable from './Components/Table/MainTable';
import Modal from './Components/Modal';
import Nav from './Components/Nav';
import ReactDOM from 'react-dom';
import Slider from './Components/Slider';
import Table from './Components/Table';
import mandalartImage from '../src/assets/images/mandalart_otani.jpeg';
import { useState } from 'react';

function Portal({ children }) {
  return ReactDOM.createPortal(children, document.getElementById('modal'));
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
      <Portal>
        <Modal isOpen={isModalOpen} onClickModal={closeModal} onPressEsc={closeModal}>
          <img src={mandalartImage} className='example' alt='mandal-art' />
        </Modal>
      </Portal>
      <Description />
      <Nav onClickExample={openModal} name={name} />
      <div className='App' id='capture'>
        <Header handleUserName={handleUserName} />
        <Slider>
          <div className='tables first-row'>
            <Table tableKey='1' addMainInput={addMainInput} centerInput={mainInput[0]} />
            <Table tableKey='2' addMainInput={addMainInput} centerInput={mainInput[1]} />
            <Table tableKey='3' addMainInput={addMainInput} centerInput={mainInput[2]} />
          </div>
          <div className='tables second-row'>
            <Table tableKey='4' addMainInput={addMainInput} centerInput={mainInput[3]} />
            <MainTable addMainInput={addMainInput} />
            <Table tableKey='5' addMainInput={addMainInput} centerInput={mainInput[4]} />
            <div className='shader left'></div>
            <div className='shader right'></div>
          </div>
          <div className='tables third-row'>
            <Table tableKey='6' addMainInput={addMainInput} centerInput={mainInput[5]} />
            <Table tableKey='7' addMainInput={addMainInput} centerInput={mainInput[6]} />
            <Table tableKey='8' addMainInput={addMainInput} centerInput={mainInput[7]} />
          </div>
        </Slider>
        <Footer />
      </div>
    </>
  );
}

export default App;
