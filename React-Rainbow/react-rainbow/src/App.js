import React, { useState } from "react";
import { colorblock } from "./components/Colorblock";
import ColorForm from "./components/ColorForm";

const DEFAULT_COLORS = ['red','yellow','blue','green','violet','teal','greenyellow','lightblue','grey',]

function App() {
    const [colors,setColors] = useState(DEFAULT_COLORS);

    const handleAddColor = (newColor) => {
        setColors([...colors,newColor]);
    }
}
    return (<div className = 'App'>
{
     
colors.map((c,i)=> {
    return <colorblock key={i} color={c}/>
})
}
<ColorForm addColor ={handleAddColor} />
</div>);




export default App;
