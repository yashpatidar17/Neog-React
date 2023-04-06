import { useState } from 'react';

export const Question1 = ({itemlist}) =>{
    const {heroes,villains} = itemlist;
    const [showhero,setshowhero] = useState(false);
    const [showvillan,setshowvillan] = useState(false);

    const showheroclick = ()=>{
        setshowhero(true);
        setshowvillan(false);
    }
    const showvillanclick = ()=>{
        setshowvillan(true);
        setshowhero(false);
    }

    return(
        <div>
            <h2>Question 1</h2>
            <button onClick = {showheroclick}>Show Heros</button>
            <button onClick = {showvillanclick}> Show Villan</button>

            <div style={{display : showhero ? 'block' : 'none'}}>
            <h2>Heros</h2>
            {showhero && heroes.map((item)=>(
                <>
                <p style ={{fontWeight : 'bold'}}>{item.name}</p>
                <p>{item.powers}</p>
                <p>{item.costume}</p>
                </>
                
            ))}
            </div>
            
            <div style={{display : showvillan ? 'block' : 'none'}}>
            <h2>Villan</h2>
          
            {showvillan && villains.map((item)=>(
                <>
                <p style ={{fontWeight : 'bold'}}>{item.name}</p>
                <p>{item.powers}</p>
                <p>{item.costume}</p>
                </>
            ))}
            </div>

        </div>
    )
}