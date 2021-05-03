import MainTable from './Table/MainTable';
import Table from './Table';
import Header from './Header';
import GlobalStyle from './global.styles';
import Slider from './Slider';
import domtoimage from 'dom-to-image';
import { useState } from 'react';
import Button from './Button';
import Modal from './Modal';
import mandalart from '../src/assets/images/mandalart_otani.jpeg';

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

  const [modal, setModal] = useState({
    isModalOpen: false,
    modalContent: '',
  });

  function addMainInput(name, value) {
    setMainInput({
      ...mainInput,
      [name]: value,
    });
  }

  function saveToImage() {
    const captureDOM = document.getElementById('capture');
    console.log(captureDOM);
    domtoimage.toPng(captureDOM).then((dataURL) => {
      const image = dataURL.replace('image/png', 'image/octet-stream');
      const link = document.createElement('a');
      link.setAttribute('download', '나만의_만다라트.png');
      link.setAttribute('href', image);
      document.body.appendChild(link);
      link.click();
      link.remove();
    });
  }

  function handleModalOpen() {
    setModal({
      isModalOpen: true,
      modalContent: <img src={mandalart} className='example-image' />,
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
        <Header />
        <div className='nav'>
          <Button customClass='save' onClick={saveToImage}>
            이미지로 저장하기
          </Button>
          <Button customClass='example-modal' onClick={handleModalOpen}>
            예시 보기
          </Button>
        </div>
        <Slider>
          <div className='tables first-row'>
            <Table addMainInput={addMainInput} centerInput={mainInput.first} />
            <Table addMainInput={addMainInput} centerInput={mainInput.second} />
            <Table addMainInput={addMainInput} centerInput={mainInput.third} />
          </div>
          <div className='tables second-row'>
            <Table addMainInput={addMainInput} centerInput={mainInput.fourth} />
            <MainTable addMainInput={addMainInput} />
            <Table addMainInput={addMainInput} centerInput={mainInput.sixth} />
            <div className='shader left'></div>
            <div className='shader right'></div>
          </div>
          <div className='tables third-row'>
            <Table addMainInput={addMainInput} centerInput={mainInput.seventh} />
            <Table addMainInput={addMainInput} centerInput={mainInput.eighth} />
            <Table addMainInput={addMainInput} centerInput={mainInput.nineth} />
          </div>
        </Slider>
      </div>
    </>
  );
}

export default App;
