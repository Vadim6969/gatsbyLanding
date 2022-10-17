import React from 'react';
import './index.scss'

const ButtonComponent = (props) => {

    return (
        <button className="button-component" {...props}>
            {props.children}
        </button>
    );
};

export default ButtonComponent;