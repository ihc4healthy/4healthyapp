import React, { useState } from "react"
import './input.css';
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const Input = ({label, type, placeholder, name, helpText,
                id, color, disabled, required, readonly,
                beforeInput, afterInput, value, setValue})=>{

    let inputClass = "input";
    if (['primary', 'secondary', 'danger'].includes(color)){
        inputClass += "-" + color;
    }
    
    const [toggleVisibility, setToggleVisibility] = useState({
        required:type=="password", isVisible: false, icon:<EyeIcon/>, inputType:type });

    return (
        <div className={inputClass} disabled={disabled}>
          <div className='cont'>
            <label>{label} {disabled?"disabled":""}</label>
            <div className="flex w-full gap-x-4">
                {beforeInput}
                <input type={toggleVisibility.inputType} name={name} id={id}
                    placeholder={placeholder ? placeholder :label}
                    disabled={disabled} required={required} readOnly={readonly}
                    value={value ? value : ""}
                    onInput={(event)=>{
                        if (setValue) { setValue(event.target.value); }
                    }}
                />
                {toggleVisibility.required ? 
                    <span onClick={()=>{
                        toggleVisibility.isVisible=!toggleVisibility.isVisible;
                        toggleVisibility.inputType = toggleVisibility.isVisible ? 'text':type;
                        setToggleVisibility({...toggleVisibility,
                            isVisible: toggleVisibility.isVisible,
                            icon:toggleVisibility.isVisible ? <EyeSlashIcon/> : <EyeIcon/>})
                    }}>
                        {toggleVisibility.icon}
                    </span>
                    : afterInput
                }
            </div>
          </div>
          {helpText ? <span className='helper'>{helpText}</span> : ''}
        </div>
    );
};

export default Input;