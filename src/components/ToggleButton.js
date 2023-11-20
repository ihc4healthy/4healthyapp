import React, { useEffect, useState } from 'react'
import './toggle-button.css';

function ToggleButton({buttons, defaultSelected, setChoosed, cols}) {
    // buttons{icon, imageSrc, text, value}
    const [selected, setSelected] = useState(defaultSelected!=undefined?defaultSelected:-1);
    useEffect(()=>{
        if (setChoosed && selected>=0) {
            setChoosed(buttons[selected].value);
        }
    }, [selected]);

    return (
        <div className={`toggle-button ${buttons.length < 4 ? 'flex': `grid grid-cols-${cols?cols:4}`} justify-center`}>
            {buttons.map((btn, i) =>
            <button type='button' key={`tbtn-btn-${i}`}
                className={`flex-col btn-elevated ${i==selected?'active text-text-primary':'text-text-secondary'}`}
                onClick={()=>{setSelected(i)}} title={btn.text} value={btn.value}
            >
                {btn.imageSrc ?
                    <img src={`images/${btn.imageSrc}`} alt={btn.text}/> :
                    <>
                    {btn.icon ? btn.icon : ""}
                    {btn.text ? btn.text : ""}
                    </>
                }
            </button>
            )}
        </div>
    )
}

export default ToggleButton