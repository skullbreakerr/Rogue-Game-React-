import React ,{useRef,useEffect} from'react';

const ReactRogue= ({width,height,tilesize}) =>{   // Props of React {width,height,tilesize}[destructuring] or props=>{...}//
  const canvasRef = useRef();  // Hooks of React
  useEffect(()=>{       // Hooks of React
    console.log("Draw Canvas");
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, width*tilesize, height*tilesize);
    ctx.fillStyle = '#9990';
    ctx.fillRect(12,22,16,16);
  });
  return(
  <canvas
  height= {height * tilesize}    // fetching property from App.js for updating size/ components
  width=  {width * tilesize}
  style={{border:'1px solid black'}}
  ></canvas>
)};

export default ReactRogue;