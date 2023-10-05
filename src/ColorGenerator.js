import { useEffect, useState } from "react"
import { SavedPalletes } from "./SavedPalletes";

export const ColorGenerator= () => {


    const [color, setColor] =useState([]);
    const [savedPallate, setSavedPalatte]=useState([]);
const generateColor=()=>{
const letters="0123456789ABCDEF";
let color="#";

for(let i=0 ; i<6 ; i++){
color += letters[Math.floor(Math.random() * 16)];
}
console.log(color);
return color;

}

useEffect(()=>{
    const randomPalatte= Array.from({length :10},generateColor) ;
    setColor(randomPalatte);
},[])

const generatePalate=()=>{
    const randomPalatte= Array.from({length :10},generateColor) ;
    setColor(randomPalatte);
}

const savePalatte =()=>{
    setSavedPalatte([...savedPallate,color])
    
    }

  return (
    <div >
    <div style={{textAlign: "center"}}>
      Color Generator 
    </div>
    <div className="color-pallate" >
{color.map((color,index)=>
(<div className="color-swatch" key={index}  style={{  backgroundColor: color}}
 onClick={savePalatte}></div>))}
    </div>
<button className=""  onClick={generatePalate}>Generate</button>
<SavedPalletes   color={savedPallate}      />
    </div>
  )
}


