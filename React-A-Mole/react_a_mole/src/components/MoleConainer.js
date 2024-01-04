import React, {useState} from 'react'; //from instructions
import Mole from './Mole'; //importing mole to use it
import EmptySlot from './EmptySlot'; //importing empty slot to use it

function MoleContainer({setScore, score}){ //from instructions
    const [displayMole, setDisplayMole] = useState(false) //from instructions

    const handleBop = () => { //from instructions
        setDisplayMole(false);
        setScore(prevScore => prevScore + 1); //from instructions
         //from instructions
    }

    const displayMoleComponent = displayMole ? <Mole setDisplayMole={setDisplayMole} handleBop={handleBop} /> : <EmptySlot setDisplayMole={setDisplayMole} />; //from instructions

    
    return (
        <div className='MoleContainer'>
            {/* <h2>MoleContainer</h2> */}
            {displayMoleComponent}
        </div>
    )
}

export default MoleContainer