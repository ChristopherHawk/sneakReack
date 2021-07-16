import React, {useState} from 'react';
import { CardContent } from 'semantic-ui-react';
import Menu from './components/menu';

import Data from './resources/data.json';

function App() {


  const[showMore, SetShowMore] = useState(false);



//SHOW MORE GRID---------------------//
const downBtn = ()=>{
  let showMoreValue = document.documentElement.style.getPropertyValue('--showMore');
  if(showMore === false){
    document.documentElement.style.setProperty('--showMore', '100%');
    downBtn.innerHTML='SHOW ME LESS'
    SetShowMore(true);
  }
  if(showMoreValue === '100%'){
    document.documentElement.style.setProperty('--showMore', '490px');
    downBtn.innerHTML='SHOW ME MORE'
    SetShowMore(false);   
  }  
  
}

 
  return (
    <CardContent>
    <CardContent id="container">
    <Menu/>
    <CardContent id="topContainer">
      <h1 id="title">EXPLORE BETOND HORIZON</h1>
      <h5 id="description">Magna mundi referrentur quo, no rebum dignissim qui, <br/>Per quodsi accusata id, agam labores.</h5>
      <button id="btnTop">VIEW OUR WORK</button>
    </CardContent>
    <CardContent id="btnView">
      <button id="btnGrid"><i style={{marginLeft: '13px'}} class="fas fa-th-large"></i></button>
      <button id="btnGridLine"><i style={{marginLeft: '13px'}} class="fas fa-equals"></i></button>
    </CardContent>
    <CardContent id="middleOptions">
      <button id="btnOptions" style={{color: 'aliceblue', background: 'rgb(233, 94, 124)'}}>All</button>
      <button id="btnOptions">Branding</button>
      <button id="btnOptions">Web</button>
      <button id="btnOptions">Photography</button>
      <button id="btnOptions">App</button>
    </CardContent>
    <CardContent id="gridPicture">
    {Data.map((item, key) => (
    <CardContent id='pictures' style={{backgroundImage: `url(${item.image})`}} > 
      <CardContent id="infoPicture">
      <h1 id='textInfo1'>{item.titulo}</h1>
      <h4 id='textInfo2'> {item.lugar}</h4>  
      </CardContent>
      </CardContent>
))}
    </CardContent>
  </CardContent>
  <CardContent id="downDivAction"><button id="downBtn" onClick={downBtn}>SHOW ME MORE</button></CardContent>
  <script src="index.js"></script>

  <h4 id="footerText"> © 2016 - <b style={{color:'rgb(233, 94, 124)', cursor: 'pointer'}}>Sneak</b> All Right Reserved</h4>
  <CardContent id="social">
    <i id="socialBtn" class="fab fa-facebook-f"></i>
    <i id="socialBtn" class="fab fa-twitter"></i>
    <i id="socialBtn" class="fas fa-basketball-ball"></i>
    <i id="socialBtn" class="fab fa-google-plus-g"></i>
    <i id="socialBtn" class="fab fa-youtube"></i>
  </CardContent>


    </CardContent>
   
  );
}

export default App;
