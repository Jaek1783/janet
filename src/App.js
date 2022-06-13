import './App.css';
import React from 'react';

import mainImg01 from './img/event/main_01.webp';
import mainImg02 from './img/event/main_02.webp';
import mainImg03 from './img/event/main_03.webp';
import mainImg04 from './img/event/main_04.webp';

import magazine_icon01 from './img/magazine/info/magazine01.webp';
import magazine_icon02 from './img/magazine/info/magazine02.webp';
import magazine_icon03 from './img/magazine/info/magazine03.webp';
import magazine_icon04 from './img/magazine/info/magazine04.webp';

import Header from './header/Header';
import MainEventSlides from './Section01/MainEventSlides';
import Magazine from './Section01/MagazineSlides';
import Magazine_info from './Section01/Magazine_items/Magazine_info';
const App=()=> {
  const mainSlides = [
    {id:1,img:mainImg01,alt:'메인슬라이드이미지01'},
    {id:2,img:mainImg02,alt:'메인슬라이드이미지02'},
    {id:3,img:mainImg03,alt:'메인슬라이드이미지03'},
    {id:4,img:mainImg04,alt:'메인슬라이드이미지04'},
  ];
  const informations = [
    {name:'icon01',img:magazine_icon01,title:'자넷매거진',body:'다양한 자격증 \n매거진'},
    {name:'icon02',img:magazine_icon02,title:'뉴스',body:'오늘의 \n최신뉴스는?'},
    {name:'icon03',img:magazine_icon03,title:'청년지원정책',body:'다양한 \n지원정책을 \n한눈에!'},
    {name:'icon04',img:magazine_icon04,title:'공인중개사\n원서접수',body:'가장빠른 원서 \n접수 꿀팁'},
  ];
  const magazines = [
    {title:'자넷info',contents:<Magazine_info informations={informations}/>},
    {title:'커뮤니티',contents:''},
    {title:'추천',contents:''},
    {title:'자넷톡',contents:''},
    {title:'우리동네 학원은?',contents:''},
    {title:'자격증 정보',contents:''},
  ];

  return (
    <div className="App">
      <Header/>
      <div className='section01'>
        <div className='contents'>
          <MainEventSlides mainSlides={mainSlides}/>
          <Magazine magazines={magazines}/>
          <div className='content03'></div>
        </div>
      </div>
    </div>
  );
}

export default App;