import React from 'react';
import logo from './logo.svg';
import './App.css';
import Content from './components/contents/Content';
import  './components/contents/Content.css'
import Header from './components/header/header'
import Menu from './components/menu/Menu';
import './components/menu/menu.css'
import Article from './components/Article/Article';
import './components/Article/Article.css'




const Data ={
    Header: "On the above image, you can see an error because the Content component",
    Content: " as we have defined with parameters" + "lkkjhgfdfghjjhgf"
}

const articles=[{
    title:"HLV Malaysia: 'Thật khó chấp nhận thất bại trước Việt Nam",
    data:"HLV Brad Maloney tiếc nuối vì Malaysia đã thi đấu quả cảm trước Việt Nam" +
     "nhưng lỡ vé vào chung kết SEA Games 31 vì bàn thua trong hiệp phụ.",
    imgUrl: require('./components/images/100.jpg')
},
{
  title:"HLV Malaysia: 'Thật khó chấp nhận thất bại trước Việt Nam",
  data:"HLV Brad Maloney tiếc nuối vì Malaysia đã thi đấu quả cảm trước Việt Nam" +
     "nhưng lỡ vé vào chung kết SEA Games 31 vì bàn thua trong hiệp phụ.",
  imgUrl: require('./components/images/101.jpg')
}
]

const MenuData=["Home","Politics","Economics","Laws","Sports","Arts","Cultures","Food", "Contact", "About"];

function App() {
  return ( 
    <>
    <Article articles={articles}/>
    </>
  );
}

export default App;
