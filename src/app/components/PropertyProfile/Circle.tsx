'use client'

import React, { useState } from 'react'

interface  Props {
label: string;
id:string;

onChange: () => void;
}


const Circle :React.FC<Props> = ({label, id, onChange}) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    
    const handleInputChange = () => {
        setIsChecked(!isChecked);
        onChange();
    };

    return (
        <>
        <span className="flex items-center">
            <input
                type="checkbox"
                className="peer hidden flex-row"
                id={id}
                checked={isChecked}
                onChange={handleInputChange}
            />

<label
    htmlFor={id}
    className={`cursor-pointer border-2 border-blue-400 rounded-full ml-1 -mt-1 flex mr-2 items-center justify-center ${isChecked ? 'bg-blue-400 border-blue-400' : ''}`}
    style={{
        width: '2.3rem',
        height: '2.3rem', 
    }}
>
    {label}
</label>
        </span>
        </>
    )
}

export default Circle
