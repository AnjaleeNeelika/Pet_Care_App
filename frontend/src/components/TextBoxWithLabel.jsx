import React from 'react';

const TextBoxWithLabel = (props) => {
    return (
        <div className='w-full'>
            <label className='text-sm'>{props.label}</label>
            <input type="text" name="" id="" className='w-full border px-5 py-2 rounded mt-1 outline-none' placeholder={props.placeholder} />
        </div>
    )
}

export default TextBoxWithLabel