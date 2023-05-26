import React from "react";

const Magazine_info = ({informations})=>{
    return(
        <div  className="info">
            {informations.map(info=>{
                return(
                    <div key={info.name}  className="info_items">
                        <dl className="info_item">
                           <dt><img src={info.img} alt={info.name+'이미지'} /></dt>
                            <dd className="info_text">
                                <h3>{info.title}</h3>
                                <p>{info.body}</p>
                            </dd>
                        </dl>
                    </div>
                )
            })}
        </div>
    )
}; export default Magazine_info;