import './App.css';
import React from 'react';

import MainImg01 from './img/event/main_01.webp';
import MainImg02 from './img/event/main_02.webp';
import MainImg03 from './img/event/main_03.webp';
import MainImg04 from './img/event/main_04.webp';

import magazine_icon01 from './img/magazine/info/magazine01.webp';
import magazine_icon02 from './img/magazine/info/magazine02.webp';
import magazine_icon03 from './img/magazine/info/magazine03.webp';
import magazine_icon04 from './img/magazine/info/magazine04.webp';

import scroll01 from './img/scroll/scroll01.webp';
import scroll02 from './img/scroll/scroll02.webp';
import scroll03 from './img/scroll/scroll03.webp';
import scroll04 from './img/scroll/scroll04.webp';
import scroll05 from './img/scroll/scroll05.webp';
import scroll06 from './img/scroll/scroll06.webp';

import keyword01 from './img/keyword/hotKeyword_02.webp';
import keyword02 from './img/keyword/hotKeyword_03.webp';
import keyword03 from './img/keyword/hotKeyword_04.webp';
import keyword04 from './img/keyword/hotKeyword_05.webp';
import keyword05 from './img/keyword/hotKeyword_06.webp';
import keyword06 from './img/keyword/hotKeyword_07.webp';
import keyword07 from './img/keyword/hotKeyword_08.webp';
import keyword08 from './img/keyword/hotKeyword_09.webp';

import Header from './header/Header';

import MainEventSlides from './Section01/MainEventSlides';
import Magazine from './Section01/MagazineSlides';
import Magazine_info from './Section01/Magazine_items/Magazine_info';
import Top10 from './Section01/Top10';
import Top10_01 from './Section01/Top10_items/Top10_01';
import Section01 from './Section01/Section01';

import MainScroll from './Section02/MainScroll';

import Keyword from './Section03/Keyword';

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
    {id:0,title:'자격증 정보',contents:''},
    {id:1,title:'자넷info',contents:<Magazine_info informations={informations}/>},
    {id:2,title:'커뮤니티',contents:''},
    {id:3,title:'추천',contents:''},
    {id:4,title:'자넷톡',contents:''},
    {id:5,title:'우리동네 학원은?',contents:''},
    {id:6,title:'자격증 정보',contents:''},
    {id:7,title:'자넷info',contents:<Magazine_info informations={informations}/>},
  ];
  const contents_top10_01 = [
    {id:1, name:'전기기사'},
    {id:2, name:'산업안전기사'},
    {id:3, name:'위험물산업기사'},
    {id:4, name:'전기산업기사'},
    {id:5, name:'건축기사'},
    {id:6, name:'건설안전기사'},
    {id:7, name:'소방설비기사(전기분야)'},
    {id:8, name:'제품디자인산업기사'},
    {id:9, name:'건설기계정비산업기사'},
    {id:10, name:'사출금형산업기사'},
  ];
  const top10s = [
    {title:'기사 인기순위',contents:<Top10_01 contents_top10_01={contents_top10_01}/>},
  ];
  const contents = [
    {name:'MainEventSlides', body:<MainEventSlides mainSlides={mainSlides}/>},
    {name:'Magazine', body:<Magazine magazines={magazines}/>},
    {name:'Top10', body:<Top10 top10s = {top10s}/>}
  ];
  const scrollImgs = [
    {name:'scroll00',img:scroll05},
    {name:'scroll01',img:scroll06},
    {name:'scroll02',img:scroll01},
    {name:'scroll03',img:scroll02},
    {name:'scroll04',img:scroll03},
    {name:'scroll05',img:scroll04},
    {name:'scroll06',img:scroll05},
    {name:'scroll07',img:scroll06},
    {name:'scroll08',img:scroll01},
    {name:'scroll09',img:scroll02},
  ];
  const keywords = [
    {
      "id":1,
      "title":"토익(TOEIC)",
      "licenseOrgan":"미국 ETS",
      "esRegdt":"2021-06-11",
      "img":keyword01
    },
    {
      "id":2,
      "title":"한국사능력검정시험",
      "licenseOrgan":"국사편찬위원회",
      "esRegdt":"2021-07-13",
      "img":keyword02
    },
    {
      "id":3,
      "title":"전기기사",
      "licenseOrgan":"한국산업인력공단",
      "esRegdt":"2021-07-13",
      "img":keyword03
    },
    {
      "id":4,
      "title":"공인중개사",
      "licenseOrgan":"한국산업인력공단",
      "esRegdt":"2021-07-13",
      "img":keyword04
    },
    {
      "id":5,
      "title":"산업안전기사",
      "licenseOrgan":"한국산업인력공단",
      "esRegdt":"2021-07-13",
      "img":keyword05
    },
    {
      "id":6,
      "title":"KBS한국어능력시험",
      "licenseOrgan":"KBS 한국어진흥원",
      "esRegdt":"2021-07-02",
      "img":keyword06
    },
    {
      "id":7,
      "title":"요양보호사",
      "licenseOrgan":"한국보건의료인국가시험원",
      "esRegdt":"2021-08-06",
      "img":keyword07
    },
    {
      "id":8,
      "title":"ITQ",
      "licenseOrgan":"한국생산성본부",
      "esRegdt":"2021-07-13",
      "img":keyword08
    }
  ];
  return (
    <div className="App">
      <Header/>
      <Section01 contents = {contents}/>
      <MainScroll scrollImgs = {scrollImgs}/>
      <Keyword keywords={keywords}/>
    </div>
  );
}

export default App;