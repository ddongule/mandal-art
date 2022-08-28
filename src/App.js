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
import { useEffect, useState } from 'react';

function Portal({ children }) {
  return ReactDOM.createPortal(children, document.getElementById('modal'));
}

function App() {
  const [mainInput, setMainInput] = useState([...new Array(9)].fill(''));
  const [subInput, setSubInput] = useState(() =>
    [...new Array(9)].map(() => [...new Array(9)].fill(''))
  );
  const [name, setName] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // initialize main/sub input with localStorage
  useEffect(() => {
    const m = localStorage.getItem('mainInput');
    const s = localStorage.getItem('subInput');
    if (m) {
      setMainInput(JSON.parse(m));
      for (var j = 0; j < 9; j++) {
        const id = `box-main-${j}`;
        const element = document.getElementById(id);
        console.log(id, element);
        if (element) {
          element.textContent = JSON.parse(m)[j];
        }
      }
    }
    if (s) {
      setSubInput(JSON.parse(s));

      for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
          const id = `box-${i + 1}-${j}`;
          const element = document.getElementById(id);
          console.log(id, element);
          if (element) {
            element.textContent = JSON.parse(s)[i][j];
          }
        }
      }
    }
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  function handleUserName(name) {
    setName(name);
  }

  function addMainInput(index, value) {
    setMainInput((prevState) => {
      const newState = [...prevState];
      newState.splice(index, 1, value);
      localStorage.setItem('mainInput', JSON.stringify(newState));
      return newState;
    });
  }

  function addSubInput(mainIndex, index, value) {
    setSubInput((prevState) => {
      const newState = [...prevState];
      newState[mainIndex][index] = value;
      localStorage.setItem('subInput', JSON.stringify(newState));
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
            <Table
              tableKey='1'
              addMainInput={addMainInput}
              centerInput={mainInput[0]}
              addSubInput={(index, value) => addSubInput(0, index, value)}
            />
            <Table
              tableKey='2'
              addMainInput={addMainInput}
              centerInput={mainInput[1]}
              addSubInput={(index, value) => addSubInput(1, index, value)}
            />
            <Table
              tableKey='3'
              addMainInput={addMainInput}
              centerInput={mainInput[2]}
              addSubInput={(index, value) => addSubInput(2, index, value)}
            />
          </div>
          <div className='tables second-row'>
            <Table
              tableKey='4'
              addMainInput={addMainInput}
              centerInput={mainInput[3]}
              addSubInput={(index, value) => addSubInput(3, index, value)}
            />
            <MainTable addMainInput={addMainInput} />
            <Table
              tableKey='5'
              addMainInput={addMainInput}
              centerInput={mainInput[4]}
              addSubInput={(index, value) => addSubInput(4, index, value)}
            />
            <div className='shader left'></div>
            <div className='shader right'></div>
          </div>
          <div className='tables third-row'>
            <Table
              tableKey='6'
              addMainInput={addMainInput}
              centerInput={mainInput[5]}
              addSubInput={(index, value) => addSubInput(5, index, value)}
            />
            <Table
              tableKey='7'
              addMainInput={addMainInput}
              centerInput={mainInput[6]}
              addSubInput={(index, value) => addSubInput(6, index, value)}
            />
            <Table
              tableKey='8'
              addMainInput={addMainInput}
              centerInput={mainInput[7]}
              addSubInput={(index, value) => addSubInput(7, index, value)}
            />
          </div>
        </Slider>
        <Footer />
      </div>
    </>
  );
}

export default App;
