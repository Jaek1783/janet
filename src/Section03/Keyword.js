import React from "react";
import styled from 'styled-components';
import hot from './../img/keyword/hot.png'

const Keyword = (props)=> {

    return(
        <div className="section03">
            <H1Styled>
                <span className="hot_icon"><img src={hot} alt="hot_keyword아이콘" /></span>
                <span className="hot_ hot_hot">HOT</span>
                <span className="hot_ hot_keyword">키워드</span>
                <span className="hot_ hot_top20">Top20</span>
            </H1Styled>
            <ul className="key_container">
                {props.keywords.map(key=>{
                    const today = new Date("2022-06-30");
                    const dday = new Date(key.esRegdt);
                    const gap = dday.getTime() - today.getTime();
                    const result = Math.ceil(gap / -(1000*60*60*24));
                    return(
                        <KeywordStyled key={key.id}>
                            <div className="keywordBox">
                                <div className="keyImg">
                                    <img src={key.img} alt={key.title+"백드라운드 이미지"} />
                                    <h3 className="key_title">{key.title}</h3>
                                    <h5 className="date">D{result}</h5>
                                </div>
                                <div className="key_text">
                                <p>시행기관 : {key.licenseOrgan}</p>
                                <span>시행일 : {key.esRegdt}</span>
                                </div>
                            </div>
                        </KeywordStyled>
                    )
                })}
            </ul>
        </div>
    )
}; export default Keyword;

const H1Styled = styled.h1`
padding-bottom:20px;
.hot_{
    font-family: 'noto sans kr';
    font-size: 30px;

}
.hot_icon{
    display: inline-block;
    width:30px;
}
.hot_hot{
    color: #8f45ef;
    padding-left:15px;
    font-weight:700;
}
.hot_top20{
    font-weight: 600;
}
`;

const KeywordStyled = styled.li`
flex:1 1 20%;
width:300px;
height:190px;
position:relative;
margin:0 16px 16px 0;
:hover{
    cursor: pointer
}
.keywordBox{
    position: absolute;
    top: 0;
    display: block;
    width: 300px;
    height: 190px;
    box-sizing: border-box;
    background: #fff;
    border: 1px solid #e5e5e5;
    overflow: hidden;
    z-index: 1;
    border-radius: 10px;
}
.keywordBox:hover{
    height: 395px;
    border: 2px solid transparent;
    background: linear-gradient(to right, white, white), linear-gradient(135deg, #add0ff, #bc8ff0);
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
    z-index: 9;
}
.keywordBox:hover .keyImg{
    background-color:transparent;
}
.keywordBox:hover img{
    opacity:1;
}
:nth-child(1)>div>.keyImg{
    background-color: #e9b107;
}
:nth-child(2)>div>.keyImg{
    background-color: #4b3962;
}
:nth-child(3)>div>.keyImg{
    background-color: #e16045;
}
:nth-child(4)>div>.keyImg{
    background-color: #474756;
}
:nth-child(5)>div>.keyImg{
    background-color: #474756;
}
:nth-child(6)>div>.keyImg{
    background-color: #b13c2f;
}
:nth-child(7)>div>.keyImg{
    background-color: #383f4e;
}
:nth-child(8)>div>.keyImg{
    background-color: #cd9308;
}
:nth-child(9)>div>.keyImg{
    background-color: #e9b107;
}
:nth-child(10)>div>.keyImg{
    background-color: #4b3962;
}
:nth-child(11)>div>.keyImg{
    background-color: #e16045;
}
:nth-child(12)>div>.keyImg{
    background-color: #474756;
}
:nth-child(13)>div>.keyImg{
    background-color: #474756;
}
:nth-child(14)>div>.keyImg{
    background-color: #b13c2f;
}
:nth-child(15)>div>.keyImg{
    background-color: #383f4e;
}
:nth-child(16)>div>.keyImg{
    background-color: #cd9308;
}
:nth-child(20)>div>.keyImg{
    background-color: #474756;
}
:nth-child(19)>div>.keyImg{
    background-color: #b13c2f;
}
:nth-child(18)>div>.keyImg{
    background-color: #383f4e;
}
:nth-child(17)>div>.keyImg{
    background-color: #cd9308;
}
`;