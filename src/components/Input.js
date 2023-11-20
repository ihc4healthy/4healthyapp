import React, { useState } from "react"
import './input.css';
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";

const Input = ({label, type, placeholder, name, helpText,
                id, color, disabled, required, readonly,
                beforeInput, afterInput, setValue, className,
                min, max, step, value,
                minLength, maxLength, multiple}) => {
    let inputClass = "input";
    if (['primary', 'secondary', 'danger'].includes(color)){
        inputClass += "-" + color;
    }
    inputClass += className ? " " + className : "";
    
    const [toggleVisibility, setToggleVisibility] = useState({
        required:type=="password", isVisible: false, icon:<EyeIcon/>, inputType:type });

    return (
        <div className={inputClass} disabled={disabled}>
          <div className='cont'>
            <label>{label} {disabled?"disabled":""}</label>
            <div className="flex w-full gap-x-4">
                {beforeInput}
                <input type={toggleVisibility.inputType} name={name} id={id}
                    placeholder={placeholder ? placeholder : label}
                    {...(value && {value: value})}
                    disabled={disabled} required={required} readOnly={readonly}
                    min={min} max={max} step={step}
                    minLength={minLength} maxLength={maxLength} multiple={multiple}
                    onInput={(event)=>{
                        const val = event.target.value;
                        if (min && val < min) { event.target.value = min }
                        if (max && val > max) { event.target.value = max }
                        if (setValue) { setValue(val); }
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