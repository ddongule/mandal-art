import { Cover, TableWrapper } from './index.styles';

function Table({ tableKey, customClass, addMainInput, centerInput, main, addSubInput }) {
  const onChangeMainInput = ({ target }) => {
    addMainInput(Number(target.dataset.index), target.innerText);
  };

  const onChangeSubInput = ({ target }) => {
    addSubInput(Number(target.dataset.index), target.innerText);
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
    const pasted = { content: '' };
    if (window.clipboardData && window.clipboardData.getData) {
      pasted.content = window.clipboardData.getData('Text');
    } else if (e.clipboardData && e.clipboardData.getData) {
      pasted.content = e.clipboardData.getData('text/plain');
    }

    e.target.textContent = pasted.content;
    e.preventDefault();

    return false;
  };

  return (
    <TableWrapper centerInput={centerInput} main={main}>
      <Cover main={main} centerInput={centerInput} />
      <div className='boxes'>
        <div onClick={onClickSpan} className='hide-input first-first'>
          <span
            id={`box-${tableKey}-0`}
            contentEditable={true}
            onPaste={onPreventStylePaste}
            data-index={0}
            className={`box ${customClass}`}
            onBlur={main ? onChangeMainInput : onChangeSubInput}
            autoComplete='off'
            data-placeholder={main ? '목표 1' : ''}
            onKeyDown={onPreventShiftTab}
          ></span>
        </div>
        <div onClick={onClickSpan} className='hide-input first-second'>
          <span
            id={`box-${tableKey}-1`}
            contentEditable={true}
            onPaste={onPreventStylePaste}
            data-index={1}
            className={`box ${customClass}`}
            onBlur={main ? onChangeMainInput : onChangeSubInput}
            autoComplete='off'
            data-placeholder={main ? '목표 2' : ''}
          />
        </div>

        <div onClick={onClickSpan} className='hide-input first-third'>
          <span
            id={`box-${tableKey}-2`}
            contentEditable={true}
            onPaste={onPreventStylePaste}
            data-index={2}
            className={`box ${customClass}`}
            onBlur={main ? onChangeMainInput : onChangeSubInput}
            autoComplete='off'
            data-placeholder={main ? '목표 3' : ''}
          />
        </div>
      </div>
      <div className='boxes'>
        <div onClick={onClickSpan} className='hide-input second-first'>
          <span
            id={`box-${tableKey}-3`}
            contentEditable={true}
            onPaste={onPreventStylePaste}
            data-index={3}
            className={`box ${customClass}`}
            onBlur={main ? onChangeMainInput : onChangeSubInput}
            autoComplete='off'
            data-placeholder={main ? '목표 4' : ''}
          />
        </div>
        <div onClick={onClickSpan} className='hide-input second-second'>
          <span
            id={`box-${tableKey}-8`}
            contentEditable={main ? true : false}
            onPaste={onPreventStylePaste}
            data-index={8}
            className={`box ${customClass}`}
            onBlur={main ? onChangeMainInput : onChangeSubInput}
            autoComplete='off'
            readOnly={main ? false : true}
            data-placeholder={main ? '최종목표' : `목표 ${tableKey}`}
          >
            {centerInput}
          </span>
        </div>
        <div onClick={onClickSpan} className='hide-input second-third'>
          <span
            id={`box-${tableKey}-4`}
            contentEditable={true}
            onPaste={onPreventStylePaste}
            data-index={4}
            className={`box ${customClass}`}
            onBlur={main ? onChangeMainInput : onChangeSubInput}
            autoComplete='off'
            data-placeholder={main ? '목표 5' : ''}
          />
        </div>
      </div>
      <div className='boxes'>
        <div onClick={onClickSpan} className='hide-input third-first'>
          <span
            id={`box-${tableKey}-5`}
            contentEditable={true}
            onPaste={onPreventStylePaste}
            data-index={5}
            className={`box ${customClass}`}
            onBlur={main ? onChangeMainInput : onChangeSubInput}
            autoComplete='off'
            data-placeholder={main ? '목표 6' : ''}
          />
        </div>
        <div onClick={onClickSpan} className='hide-input third-second'>
          <span
            id={`box-${tableKey}-6`}
            contentEditable={true}
            onPaste={onPreventStylePaste}
            data-index={6}
            className={`box ${customClass}`}
            onBlur={main ? onChangeMainInput : onChangeSubInput}
            autoComplete='off'
            data-placeholder={main ? '목표 7' : ''}
          />
        </div>
        <div onClick={onClickSpan} className='hide-input third-third'>
          <span
            id={`box-${tableKey}-7`}
            contentEditable={true}
            onPaste={onPreventStylePaste}
            data-index={7}
            className={`box ${customClass}`}
            onBlur={main ? onChangeMainInput : onChangeSubInput}
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
