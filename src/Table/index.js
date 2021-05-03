import { useState } from 'react';
import TableWrapper from './index.styles';

function Table({ customClass, addMainInput, centerInput, main }) {
  const [subInput, setSubInput] = useState({
    first: '',
    second: '',
    third: '',
    fourth: '',
    sixth: '',
    seventh: '',
    eighth: '',
    nineth: '',
  });

  function onBlurInput({ target }) {
    setSubInput({
      ...subInput,
      [target.name]: target.value,
    });
  }

  function onChangeMainInput({ target }) {
    addMainInput(target.name, target.value);
  }

  // function onChangeInput(e) {
  //   const { target } = e;
  //   if (target.value !== '') {
  //     console.log(target, target.value);
  //     target.style.opacity = 1;
  //   }
  // }

  return (
    <TableWrapper className='table-wrapper'>
      <div className='boxes'>
        <input
          name='first'
          className={`box first-first ${customClass}`}
          onBlur={main ? onChangeMainInput : onBlurInput}
          autoComplete='off'
          placeholder={main ? '목표 1' : ''}
        />
        <input
          name='second'
          className={`box first-second ${customClass}`}
          onBlur={main ? onChangeMainInput : onBlurInput}
          autoComplete='off'
          placeholder={main ? '목표 2' : ''}
        />
        <input
          name='third'
          className={`box first-third ${customClass}`}
          onBlur={main ? onChangeMainInput : onBlurInput}
          autoComplete='off'
          placeholder={main ? '목표 3' : ''}
        />
      </div>
      <div className='boxes'>
        <input
          name='fourth'
          className={`box second-first ${customClass}`}
          onBlur={main ? onChangeMainInput : onBlurInput}
          autoComplete='off'
          placeholder={main ? '목표 4' : ''}
        />
        <input
          name='fifth'
          className={`box second-second ${customClass}`}
          onBlur={main ? onChangeMainInput : onBlurInput}
          autoComplete='off'
          value={centerInput}
          readOnly={main ? false : true}
          placeholder={main ? '최종목표' : '목표'}
        />
        <input
          name='sixth'
          className={`box second-third ${customClass}`}
          onBlur={main ? onChangeMainInput : onBlurInput}
          autoComplete='off'
          placeholder={main ? '목표 5' : ''}
        />
      </div>
      <div className='boxes'>
        <input
          name='seventh'
          className={`box third-first ${customClass}`}
          onBlur={main ? onChangeMainInput : onBlurInput}
          autoComplete='off'
          placeholder={main ? '목표 6' : ''}
        />
        <input
          name='eighth'
          className={`box third-second ${customClass}`}
          onBlur={main ? onChangeMainInput : onBlurInput}
          autoComplete='off'
          placeholder={main ? '목표 7' : ''}
        />
        <input
          name='nineth'
          className={`box third-third ${customClass}`}
          onBlur={main ? onChangeMainInput : onBlurInput}
          autoComplete='off'
          placeholder={main ? '목표 8' : ''}
        />
      </div>
    </TableWrapper>
  );
}

export default Table;
