import React from 'react';

// Example of a reusable component
export const Button = ({ onClick, label }) => {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    );
};

// Example of another reusable component
export const Input = ({ value, onChange, placeholder }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
};

// Export all components
export { Button, Input };