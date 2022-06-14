import React, {useState} from "react";
import aca from './../img/icon/header/aca.webp';
import commu from './../img/icon/header/commu.webp';
import ai from './../img/icon/header/ai.webp';
import Logo from './../img/logo/logo.png';
import search from './../img/icon/header/searchBtn.png';

const Header = ()=> {
  const [open , setOpen] = useState(true);
  const toggle = ()=>{
      setOpen(open => !open);
  }
  const subGnb_items = [
    {name:'자격증 정보'},
    {name:'어학/공무원'},
    {name:'자넷 info'},
    {name:'자넷톡'},
    {name:'자넷추천'},
    {name:'MY PAGE'},
  ];
    return(
        <div className='header'>
          <div className='hd'>
            <h1 className='logo'><img src={Logo} alt="로고이미지"/></h1>
            <div className='search'>
              <div className='allSearch'>통합검색</div>
              <input type="text" placeholder='자격증 꿀팁 보러가기 #취준 #취뽀' maxLength='50'/>
              <button className='searchBtn' ><img src={search} alt="검색버튼"/></button>
            </div>
            <div className='login_container'>
              <ul className='loginBox'>
                <li className='join icon'><a href="#">회원가입</a></li>
                <li className='login icon'><a href="#">로그인</a></li>
                <li className='service icon'><a href="#">기업서비스</a></li>
              </ul>
          </div>
        </div>
        <div className='gnb_wrap'>
            <ul className="gnb">
            <li className='gnb_item '><button className='hamburgerBtn' onClick = {()=>{
                toggle();
                console.log(open);
            }}></button></li>
            <li className='gnb_item gnb_text'><a href="#">Top 100</a></li>
            <li className='gnb_item gnb_text'><a href="#">자격증정보</a></li>
            <li className='gnb_item gnb_text'><a href="#">어학/공무원</a></li>
            <li className='gnb_item gnb_text'><a href="#">자넷info</a></li>
            <li className='gnb_item gnb_text'><a href="#">자넷톡</a></li>
            </ul>
            <div className='subGnb_wrap'>
                <ul className='subGnb'>
                    <li className='aca sub_item'>
                    <a href="#"><img src={aca} alt="아카데미 네임 이미지" /></a>
                    <span>아카데미</span>
                    </li>
                    <li className='commu sub_item'>
                    <a href="#"><img src={commu} alt="커뮤니티 네임 이미지" /></a>
                    <span>커뮤니티</span>
                    </li>
                    <li className='ai sub_item'>
                    <a href="#"><img src={ai} alt="자격증AI 이미지" /></a>
                    <span>자격증</span>
                    </li>
                </ul>
            </div>
      </div>
      <div className={open?"subGnb_container_none":"subGnb_container_block"}>
            <ul className="subGnbBox">
                {subGnb_items.map(item=>{
                    return(
                        <li key={item.name} className="subGnb_item">
                            <p className="item_title">{item.name}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
        </div>
    )
}; export default Header;