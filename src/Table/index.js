import { createRef, useState } from 'react';
import TableWrapper from './index.styles';

function Table({ customClass, addMainInput, centerInput, main }) {
  const [subInput, setSubInput] = useState({
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
  const tableRef = createRef();

  function onBlurInput({ target }) {
    setSubInput({
      ...subInput,
      [target.name]: target.value,
    });
  }

  function onChangeMainInput({ target }) {
    addMainInput(target.name, target.value);
  }

  return (
    <TableWrapper>
      <div className='boxes'>
        <input
          name='first'
          className={`box first-first ${customClass}`}
          onBlur={main ? onChangeMainInput : onBlurInput}
        />
        <input
          name='second'
          className={`box first-second ${customClass}`}
          onBlur={main ? onChangeMainInput : onBlurInput}
        />
        <input
          name='third'
          className={`box first-third ${customClass}`}
          onBlur={main ? onChangeMainInput : onBlurInput}
        />
      </div>
      <div className='boxes'>
        <input
          name='fourth'
          className={`box second-first ${customClass}`}
          onBlur={main ? onChangeMainInput : onBlurInput}
        />
        <input
          name='fifth'
          className={`box second-second ${customClass}`}
          onBlur={main ? onChangeMainInput : onBlurInput}
          value={centerInput}
          readOnly={main ? false : true}
        />
        <input
          name='sixth'
          className={`box second-third ${customClass}`}
          onBlur={main ? onChangeMainInput : onBlurInput}
        />
      </div>
      <div className='boxes'>
        <input
          name='seventh'
          className={`box third-first ${customClass}`}
          onBlur={main ? onChangeMainInput : onBlurInput}
        />
        <input
          name='eighth'
          className={`box third-second ${customClass}`}
          onBlur={main ? onChangeMainInput : onBlurInput}
        />
        <input
          name='nineth'
          className={`box third-third ${customClass}`}
          onBlur={main ? onChangeMainInput : onBlurInput}
        />
      </div>
    </TableWrapper>
  );
}

export default Table;
