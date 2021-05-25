import { TableWrapper, Cover } from './index.styles';

function Table({ tableKey, customClass, addMainInput, centerInput, main, handleSubTableInputs }) {
  const onChangeMainInput = ({ target }) => {
    addMainInput(target.dataset.index, target.innerText);
  };

  const onClickSpan = (/** @type {ClickEvent}*/ e) => {
    if (e.target === e.currentTarget) {
      e.target.querySelector('span').focus();
    }
  };

  const onPreventTab = (e) => {
    if (e.key === 'Tab') e.preventDefault();
  };

  const onPreventShiftTab = (e) => {
    if (e.key === 'Tab' && e.shiftKey) e.preventDefault();
  };

  const onPreventStylePaste = (e) => {
    e.preventDefault();
    const text = e.clipboardData.getData('text');
    document.execCommand('insertText', false, text);
  };

  return (
    <TableWrapper centerInput={centerInput} main={main} className='table-wrapper'>
      <Cover main={main} centerInput={centerInput} />
      <div className='boxes'>
        <div onClick={onClickSpan} className='hide-input first-first'>
          <span
            contentEditable={true}
            onPaste={onPreventStylePaste}
            data-index={0}
            className={`box ${customClass}`}
            onBlur={main ? onChangeMainInput : handleSubTableInputs}
            autoComplete='off'
            data-placeholder={main ? '목표 1' : ''}
            onKeyDown={onPreventShiftTab}
          />
        </div>
        <div onClick={onClickSpan} className='hide-input first-second'>
          <span
            contentEditable={true}
            onPaste={onPreventStylePaste}
            data-index={1}
            className={`box ${customClass}`}
            onBlur={main ? onChangeMainInput : handleSubTableInputs}
            autoComplete='off'
            data-placeholder={main ? '목표 2' : ''}
          />
        </div>

        <div onClick={onClickSpan} className='hide-input first-third'>
          <span
            contentEditable={true}
            onPaste={onPreventStylePaste}
            data-index={2}
            className={`box ${customClass}`}
            onBlur={main ? onChangeMainInput : handleSubTableInputs}
            autoComplete='off'
            data-placeholder={main ? '목표 3' : ''}
          />
        </div>
      </div>
      <div className='boxes'>
        <div onClick={onClickSpan} className='hide-input second-first'>
          <span
            contentEditable={true}
            onPaste={onPreventStylePaste}
            data-index={3}
            className={`box ${customClass}`}
            onBlur={main ? onChangeMainInput : handleSubTableInputs}
            autoComplete='off'
            data-placeholder={main ? '목표 4' : ''}
          />
        </div>
        <div onClick={onClickSpan} className='hide-input second-second'>
          <span
            contentEditable={main ? true : false}
            data-index={8}
            className={`box ${customClass}`}
            onBlur={main ? onChangeMainInput : handleSubTableInputs}
            autoComplete='off'
            readOnly={main ? false : true}
            data-placeholder={main ? '최종목표' : `목표 ${tableKey}`}
          >
            {centerInput}
          </span>
        </div>
        <div onClick={onClickSpan} className='hide-input second-third'>
          <span
            contentEditable={true}
            onPaste={onPreventStylePaste}
            data-index={4}
            className={`box ${customClass}`}
            onBlur={main ? onChangeMainInput : handleSubTableInputs}
            autoComplete='off'
            data-placeholder={main ? '목표 5' : ''}
          />
        </div>
      </div>
      <div className='boxes'>
        <div onClick={onClickSpan} className='hide-input third-first'>
          <span
            contentEditable={true}
            onPaste={onPreventStylePaste}
            data-index={5}
            className={`box ${customClass}`}
            onBlur={main ? onChangeMainInput : handleSubTableInputs}
            autoComplete='off'
            data-placeholder={main ? '목표 6' : ''}
          />
        </div>
        <div onClick={onClickSpan} className='hide-input third-second'>
          <span
            contentEditable={true}
            onPaste={onPreventStylePaste}
            data-index={6}
            className={`box ${customClass}`}
            onBlur={main ? onChangeMainInput : handleSubTableInputs}
            autoComplete='off'
            data-placeholder={main ? '목표 7' : ''}
          />
        </div>
        <div onClick={onClickSpan} className='hide-input third-third'>
          <span
            contentEditable={true}
            onPaste={onPreventStylePaste}
            data-index={7}
            className={`box ${customClass}`}
            onBlur={main ? onChangeMainInput : handleSubTableInputs}
            autoComplete='off'
            data-placeholder={main ? '목표 8' : ''}
            onKeyDown={onPreventTab}
          />
        </div>
      </div>
    </TableWrapper>
  );
}

export default Table;
