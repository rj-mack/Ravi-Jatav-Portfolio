import React, { useContext } from "react";
import { themeContext } from "../../Context";
import Html from "../../img/html.png";
import CSS from"../../img/css.png";
import Js from"../../img/js.png"
import Node from"../../img/Node.png"
import Express from"../../img/express.png"
import Mongo from"../../img/mongo.png"
import Rct from"../../img/react.png"
import Bootstrap from"../../img/bootstrap.png"
import Py from "../../img/python.png"
import Tailwind from"../../img/Tailwind.png"
import Post from"../../img/postgras.png"
import Git from"../../img/github.png"
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
      
    <div className="expe">
      <div style={{color: darkMode?'var(--yellow)':''}} className="heading"><h1>Development</h1>

      </div>
     <hr />
     <br />
      <h3 className="h3" >Thing i'm good at <span>technology</span></h3>
      <div className="icons flex">
        <img className="pic" src={Html} alt="html" />
        <img className="pic" src={CSS}alt="" />
        
        <img className="pic" src={Js} alt="" />
        </div>
    
      <div className="icons-2  flex">
      <img className="pic" src={Node} alt="" />
        <img className="pic" src={Express} alt="" />
        <img className="pic" src={Mongo} alt="" />
        <img className="pic" src={Rct} alt="" />
        <img className="pic" src={Tailwind} alt="" />
        <img className="pic" src={Bootstrap} alt="" />
        <img className="pic" src={Py} alt="" />
        <img className="pic" src={Post} alt="" />
      </div>
    </div>
//     <div className="experience" id='experience'>
//       <div className="achievement">
//         {/* darkMode */}
//         <div className="circle" style={{color: darkMode?'var(--orange)':''}}>Fresh+</div>
//         <span  style={{color: darkMode?'white':''}}>years </span>
//         <span>Experience</span>
//       </div>
//       <div className="achievement">
//         <div className="circle" style={{color: darkMode?'var(--orange)':''}}>20+</div>
//         <span  style={{color: darkMode?'white':''}}>completed </span>
//         <span>Projects</span>
//       </div>
//       <div className="achievement">
//         <div className="circle" style={{color: darkMode?'var(--orange)':''}}>5+</div>
//         <span  style={{color: darkMode?'white':''}}>projects </span>
//         <span>Work</span>
//       </div>
//     </div>
 );
};

export default Experience;
