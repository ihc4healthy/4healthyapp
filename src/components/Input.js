import React from "react"
import './input.css';

const Input = ({label, type, placeholder, name, id, helpText, color, disabled, required, readonly})=>{
    let inputClass = "input";
    if (['primary', 'secondary', 'danger'].includes(color)){
        inputClass += "-" + color;
    }

    return (
        <div className={inputClass} disabled={disabled}>
          <div className='cont'>
            <label>{label} {disabled?"disabled":""}</label>
            <input type={type} name={name} id={id} placeholder={placeholder}
                disabled={disabled} required={required} readOnly={readonly}/>
          </div>
          {helpText ? <span className='helper'>{helpText}</span> : ''}
        </div>
    );
};

export default Input;