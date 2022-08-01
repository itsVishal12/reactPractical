import React from 'react';
import './Header.css'
import logo from '../../images/logo.png'
import bgmorning from '../../images/bgmorning.jpg'
import bgafternoon from '../../images/bgafternoon.jpg'
import bgevening from '../../images/bgevening.jpg'
import bgnight from '../../images/bgnight.jpg'
import Digitalclock from '../digitalclock/Digitalclock';
// import Digitalclock from './component/digitalclock/Digitalclock';
// const todaydat = new Date().toLocaleDateString();
// const currentime = new Date().toLocaleTimeString();
const curdate = new Date();
let curhour = curdate.getHours();
let greetings = "";
let cssstyle = {};
let bg = {};


if (curhour >= 1 && curhour < 12) {
  greetings = "Good Morning";
  cssstyle.color = "Green";
  bg.backgroundImage = `url('${bgmorning}')`;

} else if (curhour >= 13 && curhour < 16) {
  greetings = "Good AfterNoon";
  cssstyle.color = "#000";
  bg.backgroundImage = `url('${bgafternoon}')`;
}
else if (curhour >= 16 && curhour < 20) {
  greetings = "Good Evening";
  cssstyle.color = "Red";
  bg.backgroundImage = `url('${bgevening}')`;
}
else {
  greetings = "Good Night";
  cssstyle.color = "Black";
  bg.backgroundImage = `url('${bgnight}')`;
}

const Header = () => {
  return (
    <>
      <div className='center-screen' style={bg}>
        <div className='bg-clock'>
          <h1>Hi Vishal{<Digitalclock />}<span style={cssstyle}>{greetings}</span></h1>
        </div>
      </div>
    </>
  )

}
export default Header;
