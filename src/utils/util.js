import domtoimage from 'dom-to-image';

function saveToImage(name) {
  const captureDOM = document.getElementById('capture');
  const userName = name !== '' ? name : '나만';
  domtoimage
    .toJpeg(captureDOM)
    .then((dataURL) => {
      const image = dataURL.replace('image/png', 'image/octet-stream');
      const link = document.createElement('a');
      link.setAttribute('download', `${userName}의_만다라트.png`);
      link.setAttribute('href', image);
      document.body.appendChild(link);
      link.click();
      link.remove();
    })
    .catch((error) => {
      console.error(`${error} 저장 실패!`);
    });
}

export { saveToImage };
