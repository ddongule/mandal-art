import TableWrapper from './index.styles';

function Table({ customClass, addMainInput, centerInput, main, handleSubTableInputs }) {
  function onChangeMainInput({ target }) {
    addMainInput(target.dataset.index, target.value);
  }

  return (
    <TableWrapper className='table-wrapper'>
      <div className='boxes'>
        <input
          data-index={0}
          className={`box first-first ${customClass}`}
          onBlur={main ? onChangeMainInput : handleSubTableInputs}
          autoComplete='off'
          placeholder={main ? '목표 1' : ''}
        />
        <input
          data-index={1}
          className={`box first-second ${customClass}`}
          onBlur={main ? onChangeMainInput : handleSubTableInputs}
          autoComplete='off'
          placeholder={main ? '목표 2' : ''}
        />
        <input
          data-index={2}
          className={`box first-third ${customClass}`}
          onBlur={main ? onChangeMainInput : handleSubTableInputs}
          autoComplete='off'
          placeholder={main ? '목표 3' : ''}
        />
      </div>
      <div className='boxes'>
        <input
          data-index={3}
          className={`box second-first ${customClass}`}
          onBlur={main ? onChangeMainInput : handleSubTableInputs}
          autoComplete='off'
          placeholder={main ? '목표 4' : ''}
        />
        <input
          data-index={4}
          className={`box second-second ${customClass}`}
          onBlur={main ? onChangeMainInput : handleSubTableInputs}
          autoComplete='off'
          value={centerInput}
          readOnly={main ? false : true}
          placeholder={main ? '최종목표' : '목표'}
        />
        <input
          data-index={5}
          className={`box second-third ${customClass}`}
          onBlur={main ? onChangeMainInput : handleSubTableInputs}
          autoComplete='off'
          placeholder={main ? '목표 5' : ''}
        />
      </div>
      <div className='boxes'>
        <input
          data-index={6}
          className={`box third-first ${customClass}`}
          onBlur={main ? onChangeMainInput : handleSubTableInputs}
          autoComplete='off'
          placeholder={main ? '목표 6' : ''}
        />
        <input
          data-index={7}
          className={`box third-second ${customClass}`}
          onBlur={main ? onChangeMainInput : handleSubTableInputs}
          autoComplete='off'
          placeholder={main ? '목표 7' : ''}
        />
        <input
          data-index={8}
          className={`box third-third ${customClass}`}
          onBlur={main ? onChangeMainInput : handleSubTableInputs}
          autoComplete='off'
          placeholder={main ? '목표 8' : ''}
        />
      </div>
    </TableWrapper>
  );
}

export default Table;
