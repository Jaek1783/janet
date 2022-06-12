import './App.css';
import React from 'react';
import Logo from './img/logo/logo.png';

const App=()=> {
  return (
    <div className="App">
      <div>
        <div className='header'>
          <h1 className='logo'><img src={Logo} alt="로고이미지" /></h1>
          <div className='search'>
            <div className='allSearch'>통합검색</div>
              <input type="text" placeholder='자격증 꿀팁 보러가기 #취준 #취뽀' maxLength='50'/>
          </div>
          <div className='login_container'>
            <ul className='login'>
              <li>회원가입</li>
              <li>로그인</li>
              <li>가입서비스</li>
            </ul>
          </div>
        </div>
        <div className="nav"></div>
        <div className='subNav'></div>
      </div>
    </div>
  );
}

export default App;
