import React, { useEffect, useState } from 'react'
import './toggle-button.css';

function ToggleButton({buttons, defaultSelected, setChoosed}) {
    // buttons{icon, imageSrc, text, value}
    const [selected, setSelected] = useState(defaultSelected!=undefined?defaultSelected:-1);
    useEffect(()=>{
        if (setChoosed && selected>=0) {
            setChoosed(buttons[selected].value);
        }
    }, [selected]);

    return (
        <div className='toggle-button flex flex-row justify-center'>
            {buttons.map((btn, i) =>
            <button type='button' key={`tbtn-btn-${i}`}
                className={`flex-col btn-elevated items-center ${i==selected?'active':''}`}
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