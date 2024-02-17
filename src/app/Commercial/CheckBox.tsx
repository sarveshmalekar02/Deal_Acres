
import React, { useState } from 'react';

interface CheckboxProps {
    id: string;


    label: string;
    onChange: () => void;
}


const CheckBox: React.FC<CheckboxProps> = ({ id, label, onChange }) => {
    const [isChecked, setIsChecked] = useState<boolean>(false);

    const handleInputChange = () => {
        setIsChecked(!isChecked);
        onChange();
    };

    return (
        <span>
            <input
                type="checkbox"
                className="peer hidden"
                id={id}
                checked={isChecked}
                onChange={handleInputChange}
            />

            <label
                htmlFor={id}
                className={`cursor-pointer border-4 border-blue-100 p-1 rounded-xl mt-2 ${isChecked ? 'bg-blue-400 border-blue-400' : ''}`}
                style={{ padding: '0.2rem', }}
            >
                {label}
            </label>
        </span>
    );
};

export default CheckBox;
