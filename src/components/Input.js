import React, { useEffect, useState } from "react"
import './input.css';

const Input = ({label, type, placeholder, name, helpText,
                id, color, disabled, required, readonly,
                beforeInput, afterInput, setValue})=>{

    let inputClass = "input";
    if (['primary', 'secondary', 'danger'].includes(color)){
        inputClass += "-" + color;
    }

    return (
        <div className={inputClass} disabled={disabled}>
          <div className='cont'>
            <label>{label} {disabled?"disabled":""}</label>
            <div className="flex w-full gap-x-4">
                {beforeInput}
                <input type={type} name={name} id={id}
                    placeholder={placeholder}
                    disabled={disabled} required={required} readOnly={readonly}
                    onInput={(event)=>{
                        if (setValue) { setValue(event.target.value); }
                    }}/>
                {afterInput}
            </div>
          </div>
          {helpText ? <span className='helper'>{helpText}</span> : ''}
        </div>
    );
};

export default Input;