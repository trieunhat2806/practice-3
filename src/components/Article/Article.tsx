import React from "react";
import imgUrl from './components/images/100.jpg';



type ArticleProps={
    articles:{
    title:string;
    data:string;
    imgUrl:string;
    }[]
}
    const Article=(props:ArticleProps)=>{
        return(
            <div>
                {props.articles.map(item=>
                   <div>
                       <h2>{item.title}</h2>
                       <p>{item.data}</p>
                       <img src={item.imgUrl} alt="" />
                   </div> )}
            </div>
        )
    }


export default Article;