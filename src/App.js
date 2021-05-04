import { useState } from 'react';
import MainTable from './Table/MainTable';
import Table from './Table';
import Header from './Header';
import GlobalStyle from './global.styles';
import Slider from './Slider';

import Modal from './Modal';
import mandalart from '../src/assets/images/mandalart_otani.jpeg';
import Nav from './Components/Nav';

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
    nineth: '',
  });

  const [subTableInputs, setSubTableInputs] = useState({
    'first-table': [],
    'second-table': [],
    'third-table': [],
    'fourth-table': [],
    'sixth-table': [],
    'seventh-table': [],
    'eighth-table': [],
    'nineth-table': [],
  });

  const [name, setName] = useState('');

  const [modal, setModal] = useState({
    isModalOpen: false,
    modalContent: '',
  });

  function handleUserName(name) {
    setName(name);
    console.log(name);
  }

  function addMainInput(name, value) {
    setMainInput({
      ...mainInput,
      [name]: value,
    });
  }

  function handleSubTableInputs({ target }) {
    setSubTableInputs({ ...subTableInputs, [target.name]: target.value });
  }

  function handleModalOpen() {
    setModal({
      isModalOpen: true,
      modalContent: <img src={mandalart} className='example-image' alt='mandal-art' />,
    });
  }

  function handleModalClose() {
    setModal({ isModalOpen: false, modalContent: '' });
  }

  return (
    <>
      <GlobalStyle />
      <div className='App' id='capture'>
        {modal.isModalOpen && (
          <Modal handleModalClose={handleModalClose}>{modal.modalContent}</Modal>
        )}
        <Header handleUserName={handleUserName} />
        <Nav handleModalOpen={handleModalOpen} name={name} />
        <div>
          <p>Mandalart: Manda(본질의 깨달음) + la(달성 및 성취) + art(기술)</p>
          <p>본질을 깨닫는 기술, 목적을 달성하는 기술을 뜻합니다.</p>
          <p>
            가장 큰 주제 및 목표를 세우고 이에 대한 해결법, 아이디어, 생각 들을 확산해 나가는
            형태로, 생각을 더욱 쉽게 정리하고 한 눈에 조합하여 확인할 수 있습니다.
          </p>
        </div>
        <Slider>
          <div className='tables first-row'>
            <Table
              tableKey='first-table'
              addMainInput={addMainInput}
              centerInput={mainInput.first}
              handleSubTableInputs={handleSubTableInputs}
            />
            <Table
              tableKey='second-table'
              addMainInput={addMainInput}
              centerInput={mainInput.second}
              handleSubTableInputs={handleSubTableInputs}
            />
            <Table
              tableKey='third-table'
              addMainInput={addMainInput}
              centerInput={mainInput.third}
              handleSubTableInputs={handleSubTableInputs}
            />
          </div>
          <div className='tables second-row'>
            <Table
              tableKey='fourth-table'
              addMainInput={addMainInput}
              centerInput={mainInput.fourth}
              handleSubTableInputs={handleSubTableInputs}
            />
            <MainTable addMainInput={addMainInput} />
            <Table
              tableKey='sixth-table'
              addMainInput={addMainInput}
              centerInput={mainInput.sixth}
              handleSubTableInputs={handleSubTableInputs}
            />
            <div className='shader left'></div>
            <div className='shader right'></div>
          </div>
          <div className='tables third-row'>
            <Table
              tableKey='seventh-table'
              addMainInput={addMainInput}
              centerInput={mainInput.seventh}
              handleSubTableInputs={handleSubTableInputs}
            />
            <Table
              tableKey='eighth-table'
              addMainInput={addMainInput}
              centerInput={mainInput.eighth}
              handleSubTableInputs={handleSubTableInputs}
            />
            <Table
              tableKey='nineth-table'
              addMainInput={addMainInput}
              centerInput={mainInput.nineth}
              handleSubTableInputs={handleSubTableInputs}
            />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default App;
