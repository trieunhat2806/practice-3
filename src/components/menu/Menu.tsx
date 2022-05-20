import React from "react";

type MenuProps={
data:string[];
}

const Menu=(props:MenuProps) =>{
    return(
        <ul>
            {props.data.map(item=><li><a href="#">{item}</a></li>)}
        </ul>
    );
}

export default Menu;