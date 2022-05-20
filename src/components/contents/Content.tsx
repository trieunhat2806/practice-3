import React from "react";

type ContentProps={
    Header: string;
    Content: string;
}

const Content =(props:ContentProps)=>{
    return(
        <div>
            <h2>{props.Header}</h2>
            <p>{props.Content}</p>
        </div>
    );
}

export default Content;