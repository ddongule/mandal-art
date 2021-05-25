import React from 'react';
import HeaderWrapper from './index.styles';
import Input from '../Input';

function Header({ handleUserName }) {
  return (
    <HeaderWrapper>
      <div className='emoticons'>
        {[...new Array(4)].map((_, index) => (
          <React.Fragment key={index}>
            <div className='heart'>
              <img src='https://img.icons8.com/fluent/50/fa314a/pixel-heart.png' alt='heart' />
            </div>
            {index !== 3 && (
              <div className='cat'>
                <img src='https://img.icons8.com/small/16/ffffff/pixel-cat.png' alt='cat' />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <Input handleUserName={handleUserName} placeholder='' /> <span>의 만다라트</span>
    </HeaderWrapper>
  );
}

export default Header;
