import React from "react";

const Top10_01 = (props)=>{

    return(
        <ul className="top10ItemBox">
        {props.contents_top10_01.map(top10_01=>{
            return(
                <li className="top10_item" key={top10_01.name}>
                    <p className="top10_num">{top10_01.id}</p>
                    <p className="top10_text">{top10_01.name}</p>
                </li>
            )
        })}
        </ul>
    )
}; export default Top10_01;