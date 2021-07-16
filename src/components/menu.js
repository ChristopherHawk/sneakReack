import React, {useState} from 'react';
import Logo from '../assets/logo.png';
import { CardContent } from 'semantic-ui-react';
const Menu = () => {
  const[openMenu, SetOpenMenu] = useState(false);

  //OPEN MENU
const btnBarsMenu = ()=>{  
  if(openMenu === false){
    document.documentElement.style.setProperty('--openMenu', '230px');
    SetOpenMenu(true)    
  }
  else{
    document.documentElement.style.setProperty('--openMenu', '0px');
    SetOpenMenu(false) 
  }  
};
  //SELECT OPTIONS MENU-----------------------//
const menuResponsive = ()=>{
  document.documentElement.style.setProperty('--openMenu', '0px');
  SetOpenMenu(false) 
}



  return ( 
    <CardContent>
    <CardContent id="menu">
      <img src={Logo} alt="logo" id="logo"/>
      <button id="btnMenu" style={{color: 'aliceblue', background: 'rgb(233, 94, 124)'}}>All</button>
      <button id="btnMenu">Branding</button>
      <button id="btnMenu">Web</button>
      <button id="btnMenu">Photography</button>
      <button id="btnMenu">App</button>
      <i id="searchBtn" class="fas fa-search" style={{marginLeft:'17px', marginTop: '25px', cursor: 'pointer'}}></i>
      <CardContent id="menuOptions">       
      <button id="btnBarsMenu" onClick={btnBarsMenu}><i class="fas fa-bars" style={{marginLeft: '17px'}}></i> </button>
      </CardContent>
      <CardContent id="menuOptionsResponsive">
        <h3 id="menuResponsive1" onClick={menuResponsive}>Branding</h3>
        <hr/>
        <h3 id="menuResponsive2" onClick={menuResponsive}>Web</h3>
        <hr/>
        <h3 id="menuResponsive3" onClick={menuResponsive}>Photography</h3>
        <hr/>
        <h3 id="menuResponsive4" onClick={menuResponsive}>App</h3>
        <hr/>
      </CardContent>      
    </CardContent>
    </CardContent>
   );
}
 
export default Menu;