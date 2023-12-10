import React from 'react'
import ColorBlock from './ColorBlock'

function ColorBlock(props){
    return (
        <div className="colorBlock"
        style={{'backgroundColor': props.color}}>
            <p>{props.color}</p>
        </div>
    )
}


function App () {
    let colors = [
        'violet','blue',
        'lightblue','green',
        'greenyellow','yellow',
        'orange','red'
    ]

    let colorMap = colors.map((color,i) => {
        return(
            <ColorBlock color= {color}/>
       )
    })
    return (
        <div className="App">
            (colorMap)
        </div>
    )

}










// Do not forget to export your component once you have built it!
export default ColorBlock
